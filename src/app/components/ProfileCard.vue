<!-- eslint-disable vue/attribute-hyphenation -->
<template>
	<div id="profile__container" class="shadow-lg">
		<div class="profile__background" />
		<div class="profile__desc">
			<div>
				<b-avatar
					class="profile__avatar mx-auto"
					:src="`${getAvatar}`"
					size="6rem"
				/>
				<b-button
					size="sm"
					variant="light"
					class="profile__edit rounded-pill"
					@click="editProfileModal = true"
				>
					<b-icon icon="pencil" class="rounded-circle" />
				</b-button>
				<h3 class="font-weight-bold pt-2">
					{{ getUsername }}
				</h3>
				<b-button
					id="CopyAdd"
					pill
					size="sm"
					variant="outline-dark"
					class="font-weight-light py-2 px-3"
					@click="copyMyAddress(getAddress)"
				>
					{{ getAddressShort }}
					<span class="pl-1"><b-icon-clipboard /></span>
				</b-button>
				<b-popover
					target="CopyAdd"
					placement="top"
					triggers="focus"
					content="Copied!"
				/>
			</div>
		</div>
		<!-- Edit profile modal -->
		<b-modal
			id="modal-editProfile"
			v-model="editProfileModal"
			centered
			size="lg"
			header-bg-variant="light"
			header-text-variant="dark"
			header-border-variant="light"
			footer-bg-variant="light"
			footer-text-variant="dark"
			footer-border-variant="light"
		>
			<template #modal-header>
				<div class="w-100">
					<b-button
						variant="light"
						size="md"
						class="float-right"
						@click="editProfileModal = false"
					>
						<b-icon-x />
					</b-button>
				</div>
			</template>
			<b-overlay :show="fetchingData" rounded="sm">
				<b-container class="px-5">
					<b-row class="pb-4">
						<b-col>
							<h4>Edit your profile</h4>
						</b-col>
					</b-row>
					<b-row class="pb-3">
						<b-col>
							<b-form>
								<b-form-group
									id="UsernameInputGroup"
									class="text-dark font-weight-bold"
									label="Username"
									label-for="UsernameInput"
								>
									<b-form-input
										id="UsernameInput"
										v-model="newUsername"
										:maxlength="maxLengthUsername"
										type="text"
										class="w-100 py-2 px-3 mb-4"
										required
									/>
								</b-form-group>
								<b-form-group
									id="AvatarInputGroup"
									class="text-dark font-weight-bold"
									label="Avatar"
									label-for="AvatarInput"
								>
									<b-form-file
										v-model="newAvatar"
										placeholder="Choose another avatar or just ignore me..."
										drop-placeholder="Drop file here..."
									/>
								</b-form-group>
								<b-form-group
									id="CountryInputGroup"
									class="text-dark font-weight-bold"
									label="Country"
									label-for="CountryInput"
								>
									<b-form-select
										id="CountryInput"
										v-model="newCountry"
										:options="countryOptions"
										class="w-50 py-2 px-3 mb-4"
									/>
								</b-form-group>
							</b-form>
						</b-col>
					</b-row>
					<b-row>
						<b-col>
							<p class="font-weight-light">
								*If you're using <span class="font-weight-bold">Brave</span> as
								your browser, it might be a problem selecting a wallet. We
								recommend you move to another browser or change the
								<span class="font-weight-bold"
									>"Default cryptocurrency wallet"</span
								>
								on your settings to have the best experience.
							</p>
						</b-col>
					</b-row>
				</b-container>
			</b-overlay>
			<template #modal-footer>
				<div class="w-100">
					<b-button
						variant="dark"
						size="md"
						class="float-right"
						@click="editProfileModal = false"
					>
						Close
					</b-button>
					<b-button
						variant="primary"
						size="md"
						class="float-right mr-2"
						@click=";(editProfileModal = false), updateAccount({
							newUsername: newUsername
						})"
					>
						Save
					</b-button>
				</div>
			</template>
		</b-modal>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { mapState } from 'vuex'

export default {
	name: 'ProfileCard',
	data() {
		return {
			editProfileModal: false,
			maxLengthUsername: 35,
			newUsername: '',
			newAvatar: null,
			newCountry: '',
			countryOptions: [
				'',
				'Afghanistan',
				'Albania',
				'Algeria',
				'American Samoa',
				'Andorra',
				'Angola',
				'Anguilla',
				'Antarctica',
				'Antigua and Barbuda',
				'Argentina',
				'Armenia',
				'Aruba',
				'Australia',
				'Austria',
				'Azerbaijan',
				'Bahamas',
				'Bahrain',
				'Bangladesh',
				'Barbados',
				'Belarus',
				'Belgium',
				'Belize',
				'Benin',
				'Bermuda',
				'Bhutan',
				'Bolivia',
				'Bosnia and Herzegowina',
				'Botswana',
				'Bouvet Island',
				'Brazil',
				'British Indian Ocean Territory',
				'Brunei Darussalam',
				'Bulgaria',
				'Burkina Faso',
				'Burundi',
				'Cambodia',
				'Cameroon',
				'Canada',
				'Cape Verde',
				'Cayman Islands',
				'Central African Republic',
				'Chad',
				'Chile',
				'China',
				'Christmas Island',
				'Cocos (Keeling) Islands',
				'Colombia',
				'Comoros',
				'Congo',
				'Congo, the Democratic Republic of the',
				'Cook Islands',
				'Costa Rica',
				'Cote dIvoire',
				'Croatia (Hrvatska)',
				'Cuba',
				'Cyprus',
				'Czech Republic',
				'Denmark',
				'Djibouti',
				'Dominica',
				'Dominican Republic',
				'East Timor',
				'Ecuador',
				'Egypt',
				'El Salvador',
				'Equatorial Guinea',
				'Eritrea',
				'Estonia',
				'Ethiopia',
				'Falkland Islands (Malvinas)',
				'Faroe Islands',
				'Fiji',
				'Finland',
				'France',
				'France Metropolitan',
				'French Guiana',
				'French Polynesia',
				'French Southern Territories',
				'Gabon',
				'Gambia',
				'Georgia',
				'Germany',
				'Ghana',
				'Gibraltar',
				'Greece',
				'Greenland',
				'Grenada',
				'Guadeloupe',
				'Guam',
				'Guatemala',
				'Guinea',
				'Guinea-Bissau',
				'Guyana',
				'Haiti',
				'Heard and Mc Donald Islands',
				'Holy See (Vatican City State)',
				'Honduras',
				'Hong Kong',
				'Hungary',
				'Iceland',
				'India',
				'Indonesia',
				'Iran (Islamic Republic of)',
				'Iraq',
				'Ireland',
				'Israel',
				'Italy',
				'Jamaica',
				'Japan',
				'Jordan',
				'Kazakhstan',
				'Kenya',
				'Kiribati',
				'Korea, Democratic Peoples Republic of',
				'Korea, Republic of',
				'Kuwait',
				'Kyrgyzstan',
				'Lao, Peoples Democratic Republic',
				'Latvia',
				'Lebanon',
				'Lesotho',
				'Liberia',
				'Libyan Arab Jamahiriya',
				'Liechtenstein',
				'Lithuania',
				'Luxembourg',
				'Macau',
				'Macedonia, The Former Yugoslav Republic of',
				'Madagascar',
				'Malawi',
				'Malaysia',
				'Maldives',
				'Mali',
				'Malta',
				'Marshall Islands',
				'Martinique',
				'Mauritania',
				'Mauritius',
				'Mayotte',
				'Mexico',
				'Micronesia, Federated States of',
				'Moldova, Republic of',
				'Monaco',
				'Mongolia',
				'Montserrat',
				'Morocco',
				'Mozambique',
				'Myanmar',
				'Namibia',
				'Nauru',
				'Nepal',
				'Netherlands',
				'Netherlands Antilles',
				'New Caledonia',
				'New Zealand',
				'Nicaragua',
				'Niger',
				'Nigeria',
				'Niue',
				'Norfolk Island',
				'Northern Mariana Islands',
				'Norway',
				'Oman',
				'Pakistan',
				'Palau',
				'Panama',
				'Papua New Guinea',
				'Paraguay',
				'Peru',
				'Philippines',
				'Pitcairn',
				'Poland',
				'Portugal',
				'Puerto Rico',
				'Qatar',
				'Reunion',
				'Romania',
				'Russian Federation',
				'Rwanda',
				'Saint Kitts and Nevis',
				'Saint Lucia',
				'Saint Vincent and the Grenadines',
				'Samoa',
				'San Marino',
				'Sao Tome and Principe',
				'Saudi Arabia',
				'Senegal',
				'Seychelles',
				'Sierra Leone',
				'Singapore',
				'Slovakia (Slovak Republic)',
				'Slovenia',
				'Solomon Islands',
				'Somalia',
				'South Africa',
				'South Georgia and the South Sandwich Islands',
				'Spain',
				'Sri Lanka',
				'St. Helena',
				'St. Pierre and Miquelon',
				'Sudan',
				'Suriname',
				'Svalbard and Jan Mayen Islands',
				'Swaziland',
				'Sweden',
				'Switzerland',
				'Syrian Arab Republic',
				'Taiwan, Province of China',
				'Tajikistan',
				'Tanzania, United Republic of',
				'Thailand',
				'Togo',
				'Tokelau',
				'Tonga',
				'Trinidad and Tobago',
				'Tunisia',
				'Turkey',
				'Turkmenistan',
				'Turks and Caicos Islands',
				'Tuvalu',
				'Uganda',
				'Ukraine',
				'United Arab Emirates',
				'United Kingdom',
				'United States',
				'United States Minor Outlying Islands',
				'Uruguay',
				'Uzbekistan',
				'Vanuatu',
				'Venezuela',
				'Vietnam',
				'Virgin Islands (British)',
				'Virgin Islands (U.S.)',
				'Wallis and Futuna Islands',
				'Western Sahara',
				'Yemen',
				'Yugoslavia',
				'Zambia',
				'Zimbabwe'
			]
		}
	},
	computed: {
		...mapState(['username', 'userCountry', 'fetchingData']),
		...mapGetters(['getUsername', 'getAvatar', 'getAddress', 'getAddressShort'])
	},
	beforeUpdate() {
		this.newUsername = this.$store.state.username
		this.newCountry = this.$store.state.userCountry
	},
	methods: {
		...mapActions(['updateAccount']),
		copyMyAddress(add) {
			navigator.clipboard.writeText(add)
		}
	}
}
</script>

<style lang="scss">
#profile__container {
	width: 100%;
	height: 350px;
	max-height: 350px;
	border-radius: 35px;

	.profile__background {
		height: 50%;
		background-image: url('../assets/images/bg-user.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		border-top-left-radius: 35px;
		border-top-right-radius: 35px;
	}

	.profile__desc {
		height: 50%;
		position: relative;

		div {
			position: absolute;
			text-align: center;
			left: 0;
			right: 0;
			top: -60px;
		}

		.profile__edit {
			position: absolute;
			top: 40%;
			left: 55%;
		}
	}
}
</style>
