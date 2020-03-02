<template>
  <!-- <v-card flat width="100%" class="transparent"> -->
  <v-container fluid>
    <v-img src="@/assets/home/footer-top.png" cover>
      <v-card flat width="100%" class="mx-auto transparent" style="margin-top: 198px">
        <v-card-title>
          <h2 class="white-text centered">
            READY TO GET STARTED?
          </h2>
        </v-card-title>
        <v-card-text>
          <h4 class="white-text centered">
            Give us a call or drop by anytime, we endevaour to answer all<br>enquiries within 24 hours on business days.
          </h4>
        </v-card-text>
      </v-card>
        <v-container class="transparent">
          <v-row class="mx-auto">
            <v-col cols="12" class="mx-auto">
              <v-row
                align="center"
                justify="center"
              >
                <v-card
                  class="transparent mx-1 my-1"
                  flat
                >
                  <v-text-field
                    height="53"
                    class="input-field rounded"
                    label="Name"
                    rounded
                    outlined
                    dark
                    color="#fff"
                    v-model="name"
                  ></v-text-field>
                </v-card>
                <v-card
                  class="transparent mx-1 my-1"
                  flat
                >
                  <v-text-field
                    height="53"
                    class="input-field rounded"
                    label="Phone"
                    rounded
                    outlined
                    dark
                    color="#fff"
                    v-model="phone"
                    style="font-size: 16px; v-align: middle"
                    background-color="transparent"
                  ></v-text-field>
                </v-card>
                <v-card
                  class="transparent mx-1 my-0"
                  flat
                >
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
        </v-container>
    </v-img>

    <v-container fluid style="background: #003000; margin-bottom: -20px" class="mx-0 pl-auto pr-0 pb-0">
      <v-row class="transparent mx-auto">
        <v-col cols="12" xs="12" sm="8" md="6" lg="6">
          <v-card flat class="transparent">
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
        <v-col cols="12" xs="4" sm="4" md="6" lg="2">
          <v-card flat class="transparent">
            <v-card-title>
              <p class="left-16">COMPANY</p>
            </v-card-title>
            <v-card-text>
              <p class="left-14">Home</p>
              <p class="left-14">About</p>
              <p class="left-14">Residential</p>
              <p class="left-14">Business</p>
              <p class="left-14">Connect</p>
              <p class="left-14">Contact Us</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" xs="4" sm="8" md="6" lg="2">
          <v-card flat class="transparent">
            <v-card-title>
              <p class="left-16">PRODUCTS</p>
            </v-card-title>
            <v-card-text>
              <p class="left-14">Residential Internet</p>
              <p class="left-14">Business Internet</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" xs="4" sm="4" md="6" lg="2">
          <v-card flat class="transparent">
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
export default {
  name: 'Footer',
  props: {
    user: Object
  },
  data () {
    return {
      name: '',
      phone: '',
      send: false
    }
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
