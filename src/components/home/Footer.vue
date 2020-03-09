<template>
  <v-container fluid fill-height style="position: relative">
    <FooterFone/>
    <FooterFoneSmall/>
    <v-container fluid class="footer--top-content">
      <v-row align="start" justify="center" style="position: absolute; top: 0; left: 0">
        <v-card-title>
          <h2 class="white-text centered">READY TO GET STARTED?</h2>
        </v-card-title>
        <v-card-text max-width="100%">
          <h4 class="white-text centered">
              Give us a call or drop by anytime, we endevaour to answer all enquiries within 24 hours on business days.
          </h4>
        </v-card-text>
        <v-row class="mx-auto">
          <v-col cols="12" class="mx-auto">
            <v-row align="center" justify="center">
              <v-card flat class="transparent mx-1 my-1" v-if="viewportWidth > 420">
                <v-text-field
                      height="53"
                      class="input-field rounded transparent"
                      label="Name"
                      rounded
                      outlined
                      dark
                      color="#fff"
                      v-model="name"
                ></v-text-field>
              </v-card>
              <v-card flat class="transparent mx-1 my-1" v-if="viewportWidth > 420">
                <v-text-field
                      height="53"
                      class="input-field rounded transparent"
                      label="Phone"
                      rounded
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
                    rounded
                    light
                    @click="submit"
                    style="color: #20731C; margin-bottom: 28px;"
                >Get started</v-btn>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </v-row>
    </v-container>

    <v-container fluid class="footer--bottom-content" v-if="viewportWidth >= 770">
      <v-row width="100%" justify="center" class="mx-auto">
        <v-col style="min-width: 340px; max-width: 340px">
          <v-card flat class="transparent mx-auto">
            <v-card-title>
              <p class="left-16">ABOUT PINEAPPLE NET</p>
            </v-card-title>
            <v-card-text>
              <p class="left-14">Pineapple Net is an Australian Internet service provider offering the fastest and most affordable fibre optic connection to business and residential customers.</p>
              <p></p>
              <p class="left-14">Unit 127/1 Queens Rd, Melbourne VIC 3004</p>
              <p class="left-14">1300 857 501</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col style="max-width: 180px">
          <v-card flat class="transparent mx-auto">
            <v-card-title>
              <p class="left-16">COMPANY</p>
            </v-card-title>
            <v-card-text>
              <p class="left-14" @click="$emit('update:page', 0)">Home</p>
              <p class="left-14" @click="$emit('update:page', 1)">About</p>
              <p class="left-14" @click="$emit('update:page', 2)">Residential</p>
              <p class="left-14" @click="$emit('update:page', 3)">Business</p>
              <p class="left-14" @click="$emit('update:page', 4)">Connect</p>
              <p class="left-14" @click="$emit('update:page', 5)">Contact Us</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col style="max-width: 180px">
          <v-card flat class="transparent mx-auto">
            <v-card-title>
              <p class="left-16">PRODUCTS</p>
            </v-card-title>
            <v-card-text>
              <p class="left-14">Residential Internet</p>
              <p class="left-14">Business Internet</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col style="max-width: 180px">
          <v-card flat class="transparent mx-auto">
            <v-card-title>
              <p class="left-16">CONNECT</p>
            </v-card-title>
            <v-card-text>
              <p class="left-14"><v-icon></v-icon>Facebook</p>
              <p class="left-14"><v-icon></v-icon>Linkedin</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style>

.footer--top-content {
  position: absolute;
  width: 100%;
  top: 197px;
}
.footer--bottom-content {
  position: absolute;
  top: 604px;
  left: 0;
  margin-bottom: -16px;
}

.title {
  margin-top: 198px;
}

.rounded {
  border-radius: 40px!important;
}

.white-text {
  color: #fff;
}

.centered {
  text-align: center;
}

.left-16 {
  font-size: 16px;
  font-weight: 900;
  text-align: left;
  color: #fff;
}
.left-14 {
  font-size: 14px;
  font-weight: normal;
  text-align: left;
  color: #fff;
}

.input-field {
  width: 280px;
}

</style>

<script>

import { mapState } from 'vuex'

import FooterFone from '@/components/footer/FooterFone.vue'
import FooterFoneSmall from '@/components/footer/FooterFoneSmall.vue'

export default {
  name: 'Footer',
  components: {
    FooterFone,
    FooterFoneSmall
  },
  props: {
    user: Object,
    page: Number
  },
  data () {
    return {
      name: '',
      phone: '',
      send: false
    }
  },
  computed: {
    ...mapState(['viewportWidth'])
  },
  methods: {
    submit () {
      if (!this.name || !this.phone) return
      this.$emit('update:user', {
        name: this.name,
        phone: this.phone
      })
    }
  }
}
</script>
