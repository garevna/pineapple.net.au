<template>
  <v-container fluid :style="{ marginTop: containerMarginTop }">
      <v-row>
        <v-col xs="12" class="mx-xs-1 mx-sm-12">
          <v-row justify="center" class="mx-xs-1 mx-sm-12 mx-md-10 mx-lg-6">
            <v-col
              cols="12"
              md="7"
              lg="5"
            >
              <v-card flat class="transparent pa-8">
                <h1 class="text-center text-md-left">Australia's <span class="green--text">Premium<br>Optical Fibre</span> Network</h1>
                <p :style="{ fontSize: fontSize }">With speeds up to 1000Mbps, say goodbye to buffering, enjoy crystal clear video streaming, low latency and superior gaming capability.
                  Talk to family and friends without worrying about call quality.</p>
                <p :style="{ fontSize: fontSize }">All Pineapple Net packages include unlimited data with no interruption.
                  Our customers never experience evening congestion and enjoy 99.99% uptime.</p>
              </v-card>
            </v-col>

            <v-col
              cols="12"
              md="5"
              lg="4"
            >
              <v-card flat class="transparent text-center pt-md-12 mt-md-12">
                <v-card hover class="transparent text-center mx-auto px-4 py-8" width="352" height="540" style="position: relative">
                  <VueSpeedometer
                      :needleHeightRatio="0.7"
                      :needleTransitionDuration="500"
                      needleTransition="easePolyInOut"
                      needleColor="gray"
                      currentValueText="Mbps"
                      :maxSegmentLabels="6"
                      :segments="3"
                      :max-value="1000"
                      :customSegmentStops="[0, 100, 250, 500, 750, 1000]"
                      :segmentColors="colors"
                      :value="value"
                  />
                  <v-btn
                      color="buttons"
                      dark
                      rounded
                      class="px-10"
                      @click="runSpeedTest"
                      style="position: absolute; top: 220px; left: 75px;"
                  >
                      Click to Begin
                  </v-btn>
                  <v-card-text style="margin-top: -70px">
                    <p class="provider">Other Provider</p>
                    <p class="download"> {{otherProvider.download}}</p>
                    <p class="upload"> {{otherProvider.upload}}</p>

                    <p class="provider">Pineapple Net</p>
                    <p class="download">{{download}}</p>
                    <p class="upload">{{upload}}</p>
                  </v-card-text>
                </v-card>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
  </v-container>
</template>

<style scoped>
p {
  text-align: left;
  line-height: 150%;
  color: #6D6D6D;
  margin: 20px 0px 0px 10px;
}
.speedtest--card {
  margin-left: calc(50%)
}
.provider {
  color: #20731C;
  font-weight: bold;
  line-height: 80%;
}
.download, .upload {
  background: #fff;
  padding: 4px 8px;
  line-height: 150%;
}
.upload {
  margin-top: -8px;
}
.download:before {
  content: 'Download: ';
}
.upload:before {
  content: 'Upload: ';
}
.download:after, .upload:after {
  content: ' Mbps';
}
</style>

<script>

import { mapState } from 'vuex'

import VueSpeedometer from 'vue-speedometer'

export default {
  components: {
    VueSpeedometer
  },
  data () {
    return {
      value: 0,
      colors: ['#72BF44', '#BABABA', '#BABABA', '#BABABA', '#BABABA'],
      otherProvider: {
        download: 0,
        upload: 0
      },
      download: 591.64,
      upload: 527.581
    }
  },
  computed: {
    ...mapState({
      screen: 'viewportWidth'
    }),
    fontSize () {
      return this.screen < 600 ? '13px' : '24px'
    },
    marginLeft () {
      return this.screen < 960 ? 'calc(50% - 176px)' : 'auto'
    },
    containerMarginTop () {
      return this.screen < 600 ? '0px' : '-100px'
    }
  },
  // computed: {
  //   client() { return this.$store.state.client },
  //   speedtest() { return this.$store.state.speedtest.speedTestData },
  //   speedTestButtonEnabled() { return this.$store.state.speedtest.speedTestButtonEnabled },
  //   downloadProgress() { return this.$store.state.speedtest.downloadProgress },
  //   downloadSpeed() { return this.$store.state.speedtest.downloadSpeed },
  //   uploadProgress() { return this.$store.state.speedtest.uploadProgress },
  //   uploadSpeed() { return this.$store.state.speedtest.uploadSpeed },
  //   testServer() { return this.$store.state.speedtest.testServer },
  // },
  methods: {
    runSpeedTest () {
      console.log('Speed test runs')
    }
    // getCurrentSpeed(currentSpeed) {
    //   if (currentSpeed && currentSpeed !== 100) return true
    //   return false
    // },
    // getDataToShow(dataProgress, dataSpeed) {
    //   if (dataProgress === 100) return `${parseInt(dataSpeed, 10) / 100} Mbps`
    //   if (dataProgress !== null) return `${dataProgress} %`
    //   return '0 Mbps'
    // },
    // getValue() {
    //   if (this.downloadProgress && (this.downloadProgress !== 100)) return parseInt(this.downloadSpeed, 10) / 100
    //   if (this.uploadProgress && (this.uploadProgress !== 100)) return parseInt(this.uploadSpeed, 10) / 100
    //   return this.value
    // },
    // startArrowMove() {
    //   this.value = 1000
    //   setTimeout(() => { this.value = -2000 }, 1500)
    // },
  }
  // mounted () {
  //
  // }
}
</script>
