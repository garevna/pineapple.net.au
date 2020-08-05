<template>
  <v-dialog
        v-model="dialog"
        dark
        persistent
        width="320"
        class="mx-0 text-center"
  >
    <v-card width="100%" class="deepgreen text-center mx-auto pa-4 pt-8">
      <v-card flat width="100%" class="transparent text-center mx-auto my-4">
              <v-text-field
                    height="53"
                    class="input-field-rounded transparent"
                    label="Name"
                    hide-details
                    outlined
                    dark
                    color="#fff"
                    v-model="__name"
                    :rules="[rules.required]"
              ></v-text-field>
      </v-card>
      <v-card flat width="100%" class="transparent text-center mx-auto my-4">
              <v-text-field
                    height="53"
                    class="input-field-rounded transparent"
                    label="Email"
                    hide-details
                    outlined
                    dark
                    color="#fff"
                    v-model="__email"
                    :rules="[rules.required, rules.email]"
              ></v-text-field>
      </v-card>
      <v-card flat width="100%" class="transparent text-center mx-auto my-4">
              <v-text-field
                    height="53"
                    class="input-field-rounded transparent"
                    label="Phone"
                    hide-details
                    outlined
                    dark
                    color="#fff"
                    v-model="__phone"
                    style="font-size: 16px"
                    background-color="transparent"
              ></v-text-field>
      </v-card>
      <v-card flat width="100%" class="transparent text-center mx-auto my-4">
              <v-btn
                  height="53"
                  class="mx-auto"
                  width="100%"
                  dense
                  hide-details
                  rounded
                  light
                  @click="submit"
                  style="color: #20731C"
              >Get started</v-btn>
      </v-card>
      <Popup :opened.sync="popupOpened" :type="popupType" />
    </v-card>
  </v-dialog>
</template>

<style scoped>
* {
  color: #fff;
}
.input-field-rounded {
  border-radius: 48px!important;
  width: 100%;
}
</style>

<script>
import { VDialog, VCard, VTextField, VBtn } from 'vuetify/lib'
import { mapState } from 'vuex'
export default {
  name: 'FooterFormSmall',
  components: {
    VDialog,
    VCard,
    VTextField,
    VBtn
  },
  props: ['dialog', 'name', 'email', 'phone', 'submitted'],
  data () {
    return {
      send: false,
      rules: {
        required: value => !!value || 'Required',
        email: () => this.validateEmail() ? true : 'Invalid email'
      },
      popupOpened: false,
      popupType: null
    }
  },
  computed: {
    ...mapState(['viewportWidth']),
    ...mapState('content', ['emailSubject', 'emailText']),
    __name: {
      get () {
        return this.name
      },
      set (val) {
        this.$emit('update:name', val)
      }
    },
    __email: {
      get () {
        return this.email
      },
      set (val) {
        this.$emit('update:email', val)
      }
    },
    __phone: {
      get () {
        return this.phone
      },
      set (val) {
        this.$emit('update:phone', val)
      }
    }
  },
  methods: {
    validateEmail () {
      return this.__email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    },
    initFields () {
      this.__name = ''
      this.__email = ''
      this.__phone = ''
      this.popupType = null
    },
    submit () {
      this.$emit('update:submitted', true)
      this.$emit('update:dialog', false)
    }
  }
}
</script>
