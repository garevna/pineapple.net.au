<template>
<v-container fluid class="footer--bottom-content">
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
          <p class="left-14 ref" @click="$emit('update:page', 0)">Home</p>
          <p class="left-14 ref" @click="$emit('update:page', 1)">About</p>
          <p class="left-14 ref" @click="$emit('update:page', 2)">Residential</p>
          <p class="left-14 ref" @click="$emit('update:page', 3)">Business</p>
          <p class="left-14 ref" @click="$emit('update:page', 4)">Connect</p>
          <p class="left-14 ref" @click="$emit('update:page', 5)">Contact Us</p>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col style="max-width: 180px">
      <v-card flat class="transparent mx-auto">
        <v-card-title>
          <p class="left-16">PRODUCTS</p>
        </v-card-title>
        <v-card-text>
          <p class="left-14 ref">Residential Internet</p>
          <p class="left-14 ref">Business Internet</p>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col style="max-width: 180px">
      <v-card flat class="transparent mx-auto">
        <v-card-title>
          <p class="left-16">CONNECT</p>
        </v-card-title>
        <v-card-text>
          <a href="https://www.facebook.com/PineappleNetAU/" target="_blank" class="ref">
            <p class="left-14 ref">
              <v-img src="@/assets/home/icons/system-bar-facebook.png" class="icon"></v-img>Facebook
            </p>
          </a>
          <a href="https://www.linkedin.com/company/pineapplenet/" target="_blank" class="ref">
            <p class="left-14 ref">
              <v-img src="@/assets/home/icons/system-bar-linkedin.png" class="icon"></v-img> Linkedin
            </p>
          </a>
          <br>
          <br>
          <br>
          <p class="left-14 ref">FAQs & Support</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<style scoped>
.footer--bottom-content {
  position: absolute;
  top: 604px;
  left: 0;
  margin-bottom: -16px;
}
</style>

<script>
export default {
  name: 'FooterBottomContent'
}
</script>
