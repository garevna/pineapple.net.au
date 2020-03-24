<template>
<v-container fluid class="footer--bottom-content">
  <v-card flat class="transparent">
    <v-card-title>
      <p class="connect">CONNECT</p>
    </v-card-title>
    <v-card-actions class="text-center mx-auto">
      <v-spacer></v-spacer>
      <span width="10" height="10" class="mr-6">
        <v-img src="@/assets/home/icons/system-bar-call-answer.png" contain></v-img>
      </span>
      <span width="10" height="10" class="mr-6">
        <a :href="linkedIn" target="_blank">
          <v-img src="@/assets/home/icons/system-bar-linkedin.png"></v-img>
        </a>
      </span>
      <span width="10" height="10">
        <a :href="faceBook" target="_blank">
          <v-img src="@/assets/home/icons/system-bar-facebook.png"></v-img>
        </a>
      </span>
      <v-spacer></v-spacer>
    </v-card-actions>
    <v-card-text>
      <p class="copyright">{{ copyright }}<br>All Rights Reserved | Privacy</p>
    </v-card-text>
  </v-card>
</v-container>
</template>

<style scoped>
.connect {
  color: #fff;
  font-weight: 900;
  font-size: 13px;
  width: 100%;
  text-align: center;
}

.footer--bottom-content {
  position: absolute;
  left: 0;
  margin-bottom: -16px;
  color: #fff;
}
.copyright {
  text-align: center;
  color: #9B9B9B;
  font-size: 11px;
}
</style>

<script>

import { mapState } from 'vuex'

export default {
  name: 'FooterBottomContent',
  computed: {
    ...mapState(['officePhone', 'officeAddress', 'linkedIn', 'faceBook']),
    ...mapState('content', ['copyright'])
  }
}
</script>
