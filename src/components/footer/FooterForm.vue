<template>
  <v-card flat class="transparent footer--top-content" :style="{ top: top }" v-if="footer">
    <v-card-text class="text-center">
      <h2 class="white-text centered">{{ header }}</h2>
      <h5 class="white-text centered mt-8">
          {{ text }}
      </h5>
    </v-card-text>
    <v-row class="mx-auto">
      <v-col cols="12" class="mx-auto">
        <v-row align="center" justify="center">
          <v-card flat class="transparent mx-1 my-1" v-if="viewportWidth >= 430">
            <v-text-field
                  height="53"
                  class="input-field input-field-rounded transparent"
                  label="Name"
                  hide-details
                  outlined
                  dark
                  color="#fff"
                  v-model="name"
                  :rules="[rules.required]"
            ></v-text-field>
          </v-card>
          <v-card flat class="transparent mx-1 my-1" v-if="viewportWidth >= 430">
            <v-text-field
                  height="53"
                  class="input-field input-field-rounded transparent"
                  label="Email"
                  hide-details
                  outlined
                  dark
                  color="#fff"
                  v-model="email"
                  :rules="[rules.required, rules.email]"
            ></v-text-field>
          </v-card>
          <v-card flat class="transparent mx-1 my-1" v-if="viewportWidth >= 430">
            <v-text-field
                  height="53"
                  class="input-field input-field-rounded transparent"
                  label="Phone"
                  hide-details
                  outlined
                  dark
                  color="#fff"
                  v-model="phone"
                  style="font-size: 16px"
                  background-color="transparent"
            ></v-text-field>
          </v-card>
          <v-card flat class="transparent mx-1 my-0">
            <v-btn
                height="53"
                max-width="280"
                min-width="280"
                label="Phone"
                dense
                hide-details
                rounded
                light
                @click="sendRequest"
                style="color: #20731C"
            >Get started</v-btn>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
    <FooterFormSmall
            :dialog.sync="dialog"
            :name.sync="name"
            :email.sync="email"
            :phone.sync="phone"
            :submitted.sync="submitted"
    />
    <Popup :opened.sync="popupOpened" :type="popupType" />
  </v-card>
</template>

<style scoped>
* {
  color: #fff;
}
.footer--top-content {
  position: absolute;
  width: 100%;
}
.input-field-rounded {
  border-radius: 48px!important;
}
.input-field {
  width: 280px;
}
.centered {
  text-align: center;
}
.white-text {
  color: #fff;
}
</style>

<script>
import { VCard, VCardText, VRow, VCol, VTextField, VBtn } from 'vuetify/lib'
import { mapState } from 'vuex'
import FooterFormSmall from './FooterFormSmall.vue'
export default {
  name: 'FooterForm',
  components: {
    VCard,
    VCardText,
    VRow,
    VCol,
    VTextField,
    VBtn,
    FooterFormSmall
  },
  props: ['contactEndpoint', 'emailSubject', 'emailText', 'top'],
  data () {
    return {
      name: '',
      email: '',
      phone: '',
      send: false,
      rules: {
        required: value => !!value || 'Required',
        email: () => this.validateEmail() ? true : 'Invalid email'
      },
      popupOpened: false,
      popupType: null,
      dialog: false,
      submitted: false
    }
  },
  computed: {
    ...mapState(['viewportWidth']),
    ...mapState('content', ['footer']),
    header () {
      return this.footer && this.footer.topHead ? this.footer.topHead : 'READY TO GET STARTED?'
    },
    text () {
      return this.footer && this.footer.topText ? this.footer.topText : 'Leave your inquiry and we\'ll get back to you within 24 hours on business days'
    },
    mailSubject () {
      return this.emailSubject ? this.emailSubject : location.hostname
    },
    mailText () {
      return this.emailText ? this.emailText : 'Thank you for your interest in Pineapple NET! A member of our team will be in touch shortly.'
    }
  },
  watch: {
    submitted (val) {
      if (!val) return
      this.submit()
      this.submitted = false
    }
  },
  methods: {
    validateEmail () {
      return this.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    },
    initFields () {
      this.name = ''
      this.email = ''
      this.phone = ''
      this.popupType = null
    },
    async sendEmail (data) {
      if (!this.contactEndpoint) return
      const response = await fetch(this.contactEndpoint, {
        method: 'POST',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      return response.ok
    },
    sendRequest () {
      if (this.viewportWidth <= 420) {
        this.dialog = true
      } else this.submit()
    },
    submit () {
      // if (location.host.indexOf('pineapple.net.au') < 0) {
      //   this.popupType = 'disabled'
      //   this.popupOpened = true
      //   return
      // }
      this.progress = true
      if (!this.name || !this.phone || !this.validateEmail()) {
        this.popupType = 'error'
        this.popupOpened = true
        return
      }
      const response = this.sendEmail({
        subject: this.emailSubject || 'Pineapple contact form',
        email: this.email,
        message: `
          <p>${this.emailText}</p>
          <fieldset>
            <legend>Details</legend>
            <h3>Name: ${this.name}</h3>
            <h4>Email: ${this.email}</h4>
            <h4>Phone: ${this.phone}</h4>
          </fieldset>
          <p><b>Get started!</b></p>
        `
      })
      this.popupType = response ? 'success' : 'error'
      this.popupOpened = true
      response && this.initFields()
    }
  }
}
</script>
