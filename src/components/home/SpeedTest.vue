<template>
  <v-container fluid fill-height :style="{ marginTop: containerMarginTop }">
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
                <p :style="{ fontSize: fontSize }">{{ speedTest.text[0] }}</p>
                <p :style="{ fontSize: fontSize }">{{ speedTest.text[1] }}</p>
              </v-card>
            </v-col>

            <v-col
              cols="12"
              md="5"
              lg="4"
              :style="{ overflowX: speedtestOverflow }"
            >
              <v-card flat class="transparent text-center pt-md-12 mt-md-12">
                <v-card hover class="speedtest-card transparent text-center px-4 py-8">
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
                      class="run-button px-auto mx-auto"
                      @click="runSpeedTest"
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

.container.fill-height > .row {
  max-width: 100%!important;
}

p {
  text-align: left;
  line-height: 150%;
  color: #6D6D6D;
  margin: 20px 0px 0px 10px;
}

.speedtest-card {
  position: relative;
  min-width: 352px;
  max-width: 352px;
  height: 540px;
  margin-left: calc(50% - 176px);
}

.run-button {
  position: absolute;
  top: 220px;
  width: 220px;
  left: calc(50% - 110px);
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
    ...mapState('content', ['speedTest']),
    fontSize () {
      return this.screen < 600 ? '13px' : '24px'
    },
    containerMarginTop () {
      return this.screen >= 600 ? '-100px' : this.screen > 357 ? '0px' : '50px'
    },
    speedtestOverflow () {
      return this.screen <= 357 ? 'hidden' : 'visible'
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
