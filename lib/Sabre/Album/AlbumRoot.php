<?php

declare(strict_types=1);
/**
 * @copyright Copyright (c) 2022 Robin Appelman <robin@icewind.nl>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\Photos\Sabre\Album;

use OCA\DAV\Connector\Sabre\File;
use OCA\Photos\Album\AlbumFile;
use OCA\Photos\Album\AlbumMapper;
use OCA\Photos\Album\AlbumWithFiles;
use OCA\Photos\Service\UserConfigService;
use OCP\Files\Folder;
use OCP\Files\IRootFolder;
use OCP\IUser;
use Sabre\DAV\Exception\Conflict;
use Sabre\DAV\Exception\Forbidden;
use Sabre\DAV\Exception\NotFound;
use Sabre\DAV\ICollection;
use Sabre\DAV\ICopyTarget;
use Sabre\DAV\INode;

class AlbumRoot implements ICollection, ICopyTarget {
	private AlbumMapper $albumMapper;
	private AlbumWithFiles $album;
	private Folder $userFolder;
	private IUser $user;
	private UserConfigService $userConfigService;

	public function __construct(AlbumMapper $albumMapper,
		AlbumWithFiles $album,
		IRootFolder $rootFolder,
		Folder $userFolder,
		IUser $user,
		UserConfigService $userConfigService) {
		$this->albumMapper = $albumMapper;
		$this->album = $album;
		$this->rootFolder = $rootFolder;
		$this->userFolder = $userFolder;
		$this->user = $user;
		$this->userConfigService = $userConfigService;
	}

	/**
	 * @return void
	 */
	public function delete() {
		$this->albumMapper->delete($this->album->getAlbum()->getId());
	}

	public function getName(): string {
		return basename($this->album->getAlbum()->getTitle());
	}

	/**
	 * @return void
	 */
	public function setName($name) {
		$this->albumMapper->rename($this->album->getAlbum()->getId(), $name);
	}

	/**
	 * We cannot create files in an Album
	 * We add the file to the default Photos folder and then link it there.
	 *
	 * @param [type] $name
	 * @param [type] $data
	 * @return void
	 */
	public function createFile($name, $data = null) {
		try {
			// userConfigService->getUserConfig handle the path creation if missing
			$photosLocation = $this->userConfigService->getUserConfig('photosLocation');

			$photosFolder = $this->userFolder->get($photosLocation);
			if (!($photosFolder instanceof Folder)) {
				throw new Conflict('The destination exists and is not a folder');
			}

			$node = $photosFolder->newFile($name, $data);
			return $this->addFile($node->getId(), $node->getOwner()->getUID());
		} catch (\Exception $e) {
			throw new Forbidden('Could not create file');
		}
	}

	/**
	 * @return never
	 */
	public function createDirectory($name) {
		throw new Forbidden('Not allowed to create directories in this folder');
	}

	public function getChildren(): array {
		return array_map(function (AlbumFile $file) {
			return new AlbumPhoto($this->albumMapper, $this->album->getAlbum(), $file, $this->userFolder);
		}, $this->album->getFiles());
	}

	public function getChild($name): AlbumPhoto {
		foreach ($this->album->getFiles() as $file) {
			if ($file->getFileId() . "-" . $file->getName() === $name) {
				return new AlbumPhoto($this->albumMapper, $this->album->getAlbum(), $file, $this->userFolder);
			}
		}
		throw new NotFound("$name not found");
	}

	public function childExists($name): bool {
		try {
			$this->getChild($name);
			return true;
		} catch (NotFound $e) {
			return false;
		}
	}

	public function getLastModified(): int {
		return 0;
	}

	public function copyInto($targetName, $sourcePath, INode $sourceNode): bool {
		$uid = $this->user->getUID();
		if ($sourceNode instanceof File) {
			$sourceId = $sourceNode->getId();
			$ownerUID = $sourceNode->getFileInfo()->getOwner()->getUID();
			return $this->addFile($sourceId, $ownerUID);
		}
		throw new \Exception("Can't add file to album, only files from $uid can be added");
	}

	private function addFile(int $sourceId, string $ownerUID): bool {
		$uid = $this->user->getUID();
		if (in_array($sourceId, $this->album->getFileIds())) {
			throw new Conflict("File $sourceId is already in the folder");
		}
		if ($ownerUID === $uid) {
			$this->albumMapper->addFile($this->album->getAlbum()->getId(), $sourceId);
			return true;
		}
		return false;
	}

	public function getAlbum(): AlbumWithFiles {
		return $this->album;
	}

	public function getDateRange(): array {
		$earliestDate = null;
		$latestDate = null;

		foreach ($this->getChildren() as $child) {
			$childCreationDate = $child->getFileInfo()->getMtime();
			if ($childCreationDate < $earliestDate || $earliestDate === null) {
				$earliestDate = $childCreationDate;
			}

			if ($childCreationDate > $earliestDate || $latestDate === null) {
				$latestDate = $childCreationDate;
			}
		}

		return ['start' => $earliestDate, 'end' => $latestDate];
	}

	/**
	 * @return int|null
	 */
	public function getCover() {
		$children = $this->getChildren();

		if (count($children) > 0) {
			return $children[0]->getFileId();
		} else {
			return null;
		}
	}
}
