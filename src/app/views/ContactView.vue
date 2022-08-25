<template>
    <div>
        <b-container>
            <b-row class="text-center my-2">
                <h3 class="text-dark font-weight-bold mx-auto pt-5 pt-sm-0">
                    <span>
                        <img
                            src="../assets/vectors/leave-5.png"
                            alt=""
                            style="width: 30px"
                            class="pb-2"
                        />
                    </span>

                    Get in touch

                    <span>
                        <img
                            src="../assets/vectors/leave-5.png"
                            alt=""
                            style="width: 30px; transform: scaleX(-1);"
                            class="pb-2"
                        />
                    </span>
                </h3>
                <div class="w-60 px-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, consectetur magnam? Facere illo dolorum atque quaerat qui at ea rem aperiam, quidem quis neque repudiandae eaque quasi numquam sit dignissimos inventore debitis quae fugiat iste ullam eius saepe ad? Fugit!</p>
                </div>
            </b-row>
            <b-row class="my-5">
                <b-col cols="12" md="6" xl="6" class="p-3 my-2">
                    <b-form id="form" @submit.prevent="sendEmail">

                        <b-form-group id="input-group-2" label="Subject" class="font-weight-bold" labelFor="input-2">
                            <b-form-input
                            id="input-2"
                            v-model="subject"
                            name="subject"
                            rounded="sm"
                            placeholder="Enter the subject..."
                            required
                            class="contact-inputs"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group
                            id="input-group-1"
                            label="Email"
                            class="font-weight-bold"
                            labelFor="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            v-model="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email address..."
                            required
                            class="contact-inputs"
                            ></b-form-input>
                        </b-form-group>


                        <b-form-group id="textarea" label="Message" class="font-weight-bold" labelFor="input-3">
                            <b-form-textarea
                                id="textarea"
                                v-model="text"
                                name="text"
                                placeholder="Enter your message..."
                                rows="3"
                                maxRows="6"
                                class="contact-inputs"
                            ></b-form-textarea>
                        </b-form-group>


                        <div class="text-center">
                            <b-button pill variant="success" class="p-3 w-50 font-weight-bold" type="submit">Submit</b-button>
                        </div>
                    </b-form>
                </b-col>
                <b-col cols="12" md="6" xl="6" class="text-center contact-plant my-2">
                    <img style="width:300px; height: 300px;" src="../assets/vectors/tree-12.png" alt="tree-12">
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser'

export default {
	data() {
		return {
			subject:'',
			email:'',
			text:''
			
		}
	},
	methods: {
		sendEmail(e) {
			try {
				emailjs.sendForm('service_g8wspho', 'template_pf8r9ph', e.target,
					'sQeMABebgdSV_j6ku', {
						subject: this.subject,
						email: this.email,
						text: this.text
					})
				console.log('enviado')

			} catch(error) {
				console.log({error})
			}
			// Reset form field
			this.subject = ''
			this.email = ''
			this.text = ''
		}
	}
}
</script>

<style lang="scss">
    .contact-inputs{
        border-radius: 20px;
        border: 2px solid #CBCBCB;
    }

    .contact-plant{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>