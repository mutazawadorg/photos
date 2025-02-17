<!--
 - @copyright Copyright (c) 2022 Louis Chemineau <louis@chmn.me>
 -
 - @author Louis Chemineau <louis@chmn.me>
 -
 - @license AGPL-3.0-or-later
 -
 - This program is free software: you can redistribute it and/or modify
 - it under the terms of the GNU Affero General Public License as
 - published by the Free Software Foundation, either version 3 of the
 - License, or (at your option) any later version.
 -
 - This program is distributed in the hope that it will be useful,
 - but WITHOUT ANY WARRANTY; without even the implied warranty of
 - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 - GNU Affero General Public License for more details.
 -
 - You should have received a copy of the GNU Affero General Public License
 - along with this program. If not, see <http://www.gnu.org/licenses/>.
 -
 -->
<template>
	<div class="manage-collaborators">
		<h2 class="manage-collaborators__title">
			{{ t('photos', 'Add collaborators') }}
		</h2>
		<div class="manage-collaborators__subtitle">
			{{ t('photos', 'Add people or groups who can edit your album') }}
		</div>

		<form class="manage-collaborators__form" @submit.prevent>
			<NcPopover ref="popover"
				:auto-size="true"
				:distance="0">
				<label slot="trigger" class="manage-collaborators__form__input">
					<NcTextField :value.sync="searchText"
						autocomplete="off"
						type="search"
						name="search"
						:aria-label="t('photos', 'Search for collaborators')"
						aria-autocomplete="list"
						:aria-controls="`manage-collaborators__form__selection-${randomId} manage-collaborators__form__list-${randomId}`"
						:placeholder="t('photos', 'Search people or groups')"
						@input="searchCollaborators">
						<Magnify :size="16" />
					</NcTextField>
					<NcLoadingIcon v-if="loadingCollaborators" />
				</label>

				<ul v-if="searchResults.length !== 0" :id="`manage-collaborators__form__list-${randomId}`" class="manage-collaborators__form__list">
					<li v-for="collaboratorKey of searchResults" :key="collaboratorKey">
						<NcListItemIcon :id="availableCollaborators[collaboratorKey].id"
							class="manage-collaborators__form__list__result"
							:title="availableCollaborators[collaboratorKey].id"
							:search="searchText"
							:user="availableCollaborators[collaboratorKey].id"
							:display-name="availableCollaborators[collaboratorKey].label"
							:aria-label="t('photos', 'Add {collaboratorLabel} to the collaborators list', {collaboratorLabel: availableCollaborators[collaboratorKey].label})"
							tabindex="0"
							@click="selectEntity(collaboratorKey)" />
					</li>
				</ul>
				<NcEmptyContent v-else
					key="emptycontent"
					class="manage-collaborators__form__list--empty"
					:title="t('photos', 'No collaborators available')">
					<AccountGroup slot="icon" />
				</NcEmptyContent>
			</NcPopover>
		</form>

		<ul class="manage-collaborators__selection">
			<li v-for="collaboratorKey of listableSelectedCollaboratorsKeys"
				:key="collaboratorKey"
				class="manage-collaborators__selection__item">
				<NcListItemIcon :id="availableCollaborators[collaboratorKey].id"
					:display-name="availableCollaborators[collaboratorKey].label"
					:title="availableCollaborators[collaboratorKey].id"
					:user="availableCollaborators[collaboratorKey].id">
					<NcButton type="tertiary"
						:aria-label="t('photos', 'Remove {collaboratorLabel} from the collaborators list', {collaboratorLabel: availableCollaborators[collaboratorKey].label})"
						@click="unselectEntity(collaboratorKey)">
						<Close slot="icon" :size="20" />
					</NcButton>
				</NcListItemIcon>
			</li>
		</ul>

		<div class="actions">
			<div v-if="allowPublicLink" class="actions__public-link">
				<template v-if="isPublicLinkSelected">
					<NcButton class="manage-collaborators__public-link-button"
						:aria-label="t('photos', 'Copy the public link')"
						:disabled="publicLink.id === ''"
						@click="copyPublicLink">
						<template v-if="publicLinkCopied">
							{{ t('photos', 'Public link copied!') }}
						</template>
						<template v-else>
							{{ t('photos', 'Copy public link') }}
						</template>
						<template #icon>
							<Check v-if="publicLinkCopied" />
							<ContentCopy v-else />
						</template>
					</NcButton>
					<NcButton type="tertiary"
						:aria-label="t('photos', 'Delete the public link')"
						:disabled="publicLink.id === ''"
						@click="deletePublicLink">
						<NcLoadingIcon v-if="publicLink.id === ''" slot="icon" />
						<Close v-else slot="icon" />
					</NcButton>
				</template>
				<NcButton v-else
					class="manage-collaborators__public-link-button"
					@click="createPublicLinkForAlbum">
					<Earth slot="icon" />
					{{ t('photos', 'Share via public link') }}
				</NcButton>
			</div>

			<div class="actions__slot">
				<slot :collaborators="selectedCollaborators" />
			</div>
		</div>
	</div>
</template>
<script>
import { mapActions } from 'vuex'

import Magnify from 'vue-material-design-icons/Magnify'
import Close from 'vue-material-design-icons/Close'
import Check from 'vue-material-design-icons/Check'
import ContentCopy from 'vue-material-design-icons/ContentCopy'
import AccountGroup from 'vue-material-design-icons/AccountGroup'
import Earth from 'vue-material-design-icons/Earth'

import axios from '@nextcloud/axios'
import { showError } from '@nextcloud/dialogs'
import { getCurrentUser } from '@nextcloud/auth'
import { generateOcsUrl, generateUrl } from '@nextcloud/router'
import { NcButton, NcListItemIcon, NcLoadingIcon, NcPopover, NcTextField, NcEmptyContent } from '@nextcloud/vue'
import { Type } from '@nextcloud/sharing'

import logger from '../../services/logger.js'
import AbortControllerMixin from '../../mixins/AbortControllerMixin.js'
import { fetchAlbum } from '../../services/Albums.js'

/**
 * @typedef {object} Collaborator
 * @property {string} id - The id of the collaborator.
 * @property {string} label - The label of the collaborator for display.
 * @property {Type.SHARE_TYPE_USER|Type.SHARE_TYPE_GROUP|Type.SHARE_TYPE_LINK} type - The type of the collaborator.
 */

export default {
	name: 'CollaboratorsSelectionForm',

	components: {
		Magnify,
		Close,
		AccountGroup,
		ContentCopy,
		Check,
		Earth,
		NcLoadingIcon,
		NcButton,
		NcListItemIcon,
		NcTextField,
		NcPopover,
		NcEmptyContent,
	},

	mixins: [AbortControllerMixin],

	props: {
		albumName: {
			type: String,
			required: true,
		},

		/** @type {import('vue').PropType<Collaborator[]>} */
		collaborators: {
			type: Array,
			default: () => [],
		},

		allowPublicLink: {
			type: Boolean,
			default: true,
		},
	},

	data() {
		return {
			searchText: '',
			/** @type {Object<string, Collaborator>} */
			availableCollaborators: {},
			/** @type {string[]} */
			selectedCollaboratorsKeys: [],
			/** @type {Collaborator[]} */
			currentSearchResults: [],
			loadingAlbum: false,
			errorFetchingAlbum: null,
			loadingCollaborators: false,
			randomId: Math.random().toString().substring(2, 10),
			publicLinkCopied: false,
			config: {
				minSearchStringLength: parseInt(OC.config['sharing.minSearchStringLength'], 10) || 0,
			},
		}
	},

	computed: {
		/**
		 * @return {string[]}
		 */
		searchResults() {
			return this.currentSearchResults
				.filter(({ id }) => id !== getCurrentUser().uid)
				.map(({ type, id }) => `${type}:${id}`)
				.filter(collaboratorKey => !this.selectedCollaboratorsKeys.includes(collaboratorKey))
		},

		/**
		 * @return {string[]}
		 */
		listableSelectedCollaboratorsKeys() {
			return this.selectedCollaboratorsKeys
				.filter(collaboratorKey => this.availableCollaborators[collaboratorKey].type !== Type.SHARE_TYPE_LINK)
		},

		/**
		 * @return {Collaborator[]}
		 */
		selectedCollaborators() {
			return this.selectedCollaboratorsKeys
				.map((collaboratorKey) => this.availableCollaborators[collaboratorKey])
		},

		/**
		 * @return {boolean}
		 */
		isPublicLinkSelected() {
			return this.selectedCollaboratorsKeys.includes(`${Type.SHARE_TYPE_LINK}`)
		},

		/** @return {Collaborator} */
		publicLink() {
			return this.availableCollaborators[Type.SHARE_TYPE_LINK]
		},
	},

	watch: {
		collaborators(collaborators) {
			this.populateCollaborators(collaborators)
		},
	},

	mounted() {
		this.searchCollaborators()
		this.populateCollaborators(this.collaborators)
	},

	methods: {
		...mapActions(['updateAlbum', 'addAlbums']),

		/**
		 * Fetch possible collaborators.
		 */
		async searchCollaborators() {
			if (this.searchText.length >= 1) {
				this.$refs.popover.$refs.popover.show()
			}

			try {
				if (this.searchText.length < this.config.minSearchStringLength) {
					return
				}

				this.loadingCollaborators = true
				const response = await axios.get(generateOcsUrl('core/autocomplete/get'), {
					params: {
						search: this.searchText,
						itemType: 'share-recipients',
						shareTypes: [
							Type.SHARE_TYPE_USER,
							Type.SHARE_TYPE_GROUP,
						],
					},
				})

				this.currentSearchResults = response.data.ocs.data
					.map(collaborator => {
						switch (collaborator.source) {
						case 'users':
							return { id: collaborator.id, label: collaborator.label, type: Type.SHARE_TYPE_USER }
						case 'groups':
							return { id: collaborator.id, label: collaborator.label, type: Type.SHARE_TYPE_GROUP }
						default:
							throw new Error(`Invalid collaborator source ${collaborator.source}`)
						}
					})

				this.availableCollaborators = {
					...this.availableCollaborators,
					...this.currentSearchResults.reduce(this.indexCollaborators, {}),
				}
			} catch (error) {
				this.errorFetchingCollaborators = error
				logger.error(t('photos', 'Failed to fetch collaborators list.'), error)
				showError(t('photos', 'Failed to fetch collaborators list.'))
			} finally {
				this.loadingCollaborators = false
			}
		},

		/**
		 * Populate selectedCollaboratorsKeys and availableCollaborators.
		 *
		 * @param {Collaborator[]} collaborators
		 */
		populateCollaborators(collaborators) {
			const initialCollaborators = collaborators.reduce(this.indexCollaborators, {})
			this.selectedCollaboratorsKeys = Object.keys(initialCollaborators)
			this.availableCollaborators = {
				3: {
					id: '',
					label: t('photos', 'Public link'),
					type: Type.SHARE_TYPE_LINK,
				},
				...this.availableCollaborators,
				...initialCollaborators,
			}
		},

		/**
		 * @param {Object<string, Collaborator>} collaborators - Index of collaborators
		 * @param {Collaborator} collaborator - A collaborator
		 */
		indexCollaborators(collaborators, collaborator) {
			return { ...collaborators, [`${collaborator.type}${collaborator.type === Type.SHARE_TYPE_LINK ? '' : ':'}${collaborator.type === Type.SHARE_TYPE_LINK ? '' : collaborator.id}`]: collaborator }
		},

		async createPublicLinkForAlbum() {
			this.selectEntity(`${Type.SHARE_TYPE_LINK}`)
			await this.updateAlbumCollaborators()
			try {
				this.loadingAlbum = true
				this.errorFetchingAlbum = null

				const album = await fetchAlbum(
					`/photos/${getCurrentUser().uid}/albums/${this.albumName}`,
					{ signal: this.abortController.signal }
				)

				this.addAlbums({ albums: [album] })
			} catch (error) {
				if (error.response?.status === 404) {
					this.errorFetchingAlbum = 404
				} else {
					this.errorFetchingAlbum = error
				}

				logger.error('[PublicAlbumContent] Error fetching album', { error })
				showError(this.t('photos', 'Failed to fetch album.'))
			} finally {
				this.loadingAlbum = false
			}
		},

		async deletePublicLink() {
			this.unselectEntity(`${Type.SHARE_TYPE_LINK}`)
			this.availableCollaborators[3] = {
				id: '',
				label: t('photos', 'Public link'),
				type: Type.SHARE_TYPE_LINK,
			}
			this.publicLinkCopied = false
			await this.updateAlbumCollaborators()
		},

		async updateAlbumCollaborators() {
			try {
				await this.updateAlbum({
					albumName: this.albumName,
					properties: {
						collaborators: this.selectedCollaborators,
					},
				})
			} catch (error) {
				logger.error('[PublicAlbumContent] Error updating album', { error })
				showError(this.t('photos', 'Failed to update album.'))
			} finally {
				this.loadingAlbum = false
			}
		},

		async copyPublicLink() {
			await navigator.clipboard.writeText(`${window.location.protocol}//${window.location.host}${generateUrl(`apps/photos/public/${this.publicLink.id}`)}`)
			this.publicLinkCopied = true
			setTimeout(() => {
				this.publicLinkCopied = false
			}, 10000)
		},

		selectEntity(collaboratorKey) {
			if (this.selectedCollaboratorsKeys.includes(collaboratorKey)) {
				return
			}

			this.$refs.popover.$refs.popover.hide()
			this.selectedCollaboratorsKeys.push(collaboratorKey)
		},

		unselectEntity(collaboratorKey) {
			const index = this.selectedCollaboratorsKeys.indexOf(collaboratorKey)

			if (index === -1) {
				return
			}

			this.selectedCollaboratorsKeys.splice(index, 1)
		},
	},
}
</script>
<style lang="scss" scoped>
.manage-collaborators {
	display: flex;
	flex-direction: column;
	padding: 20px;
	height: 500px;

	&__title {
		font-weight: bold;
	}

	&__subtitle {
		color: var(--color-text-lighter);
	}

	&__public-link-button {
		margin: 4px 0;
	}

	&__form {
		margin-top: 4px 0;
		display: flex;
		flex-direction: column;

		&__input {
			position: relative;
			display: block;

			input {
				width: 100%;
				padding-left: 34px;
			}

			.loading-icon {
				position: absolute;
				top: calc(36px / 2 - 20px / 2);
				right: 8px;
			}
		}

		&__list {
			padding: 8px;
			height: 350px;
			overflow: scroll;

			&__result {
				padding: 8px;
				border-radius: 100px;
				box-sizing: border-box;

				&, & * {
					cursor: pointer !important;
				}

				&:hover {
					background: var(--color-background-dark);
				}
			}

			&--empty {
				margin: 100px 0;
			}
		}
	}

	&__selection {
		display: flex;
		flex-direction: column;
		margin-top: 8px;
		flex-grow: 1;

		&__item {
			border-radius: var(--border-radius-pill);
			padding:  0 8px;

			&:hover {
				background: var(--color-background-dark);
			}
		}
	}

	.actions {
		display: flex;
		margin-top: 8px;

		&__public-link {
			display: flex;
			align-items: center;

			button {
				margin-left: 8px;
			}
		}

		&__slot {
			flex-grow: 1;
			display: flex;
			justify-content: flex-end;
			align-items: center;
		}
	}
}
</style>
