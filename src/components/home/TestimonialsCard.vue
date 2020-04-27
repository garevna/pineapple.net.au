<template>
  <v-card hover :width="cardWidth" :height="cardHeight" style="position: relative" pa-4>
    <img :src="photo" class="testimonial-photo" width="40" height="40" style="border-radius: 50%" alt="" />
    <p class="testimonial-name">{{ name }}</p>
    <p class="testimonial-text" :style="{ fontSize: textSize, height: textBlockHeight }" v-html="text"></p>
    <p class="testimonial-text-ellipsis" :style="{ fontSize: textSize }" v-if="ellipsis" @click="showFullText">...</p>
    <p class="testimonial-date">{{ date }}</p>
  </v-card>
</template>

<style scoped>

.testimonial-name,
.testimonial-text,
.testimonial-date,
.testimonial-photo {
  position: absolute;
}

.testimonial-name, .testimonial-date { text-align: left; }

.testimonial-photo {
  top: 30px;
  left: 20px;
  border-radius: 50%!important;
}
.testimonial-name {
  top: 36px;
  left: 70px;
  font-size: 15px;
  font-weight: bold;
}
.testimonial-text {
  position: absolute;
  top: 80px;
  left: 20px;
  width: calc(100% - 40px);
  /* height: 82px; */
  overflow: hidden;
  text-align: justify;
  font-weight: normal;
}
.testimonial-text-ellipsis {
  position: absolute;
  top: 160px;
  left: 20px;
  text-align: left;
}
.testimonial-date {
  position: absolute;
  bottom: 4px;
  left: 12px;
  font-size: 12px;
  font-weight: normal;
}
</style>

<script>

import { mapState } from 'vuex'

export default {
  name: 'TestimonialsCard',
  props: ['date', 'photo', 'name', 'text'],
  data: () => ({
    cardHeight: '240px',
    actualTextHeight: 0
  }),
  computed: {
    ...mapState(['viewportWidth']),
    cardWidth () {
      return this.viewportWidth < 600 ? this.viewportWidth - 100 : 376
    },
    textSize () {
      return this.viewportWidth < 600 ? '12px' : '14px'
    },
    textBlockHeight () {
      return (this.viewportWidth < 600 ? 86 : 82) + 'px'
    },
    ellipsis () {
      const offset = this.viewportWidth < 600 ? 86 : 82
      return this.actualTextHeight > offset
    }
  },
  methods: {
    showFullText () {
      //
    },
    getActualTextHeight () {
      const textElement = document.body.appendChild(document.createElement('p'))
      textElement.style.marginTop = '-1000px'
      textElement.style.width = (this.cardWidth - 40) + 'px'
      textElement.style.fontSize = this.textSize + 'px'
      textElement.textContent = this.text
      this.actualTextHeight = textElement.offsetHeight
      console.log(this.actualTextHeight)
      textElement.remove()
    }
  },
  mounted () {
    this.getActualTextHeight()
  }
}

</script>
