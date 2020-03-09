<template>
  <div class="d-flex justify-center">
    <input type="checkbox" value="Residential" :class="`checkbox ${activeClass}`">
  </div>
</template>

<style scoped>

.checkbox {
  position: relative;
  display: inline-block;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  height: var(--switch-height);
  width: var(--switch-width);
  font-size: var(--switch-font-size);
  border-radius: 80px;
  background-color: #72BF44;
  border-color: transparent;
  background-clip: padding-box;
  color: #72BF44;
  vertical-align: middle;
}

.checkbox:before {
    padding: 20px 40px;
    padding-top: var(--switch-padding-top);
    font-family: 'Gilroy';
    font-size: var(--switch-font-size);
    letter-spacing: 0.02em;
    color: #20731C;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 50%;
    background-color: white;
    border-radius: 80px;
    border: 0.125em solid transparent;
    background-clip: padding-box;
    transform: translateZ(0);
    backface-visibility: hidden;
    z-index: 2;
}
.checkbox:after {
    position: absolute;
    top: var(--switch-top);
    line-height: 2;
    font-size: var(--switch-font-size);
    font-weight: bold;
    font-family: 'Gilroy';
    color: #FFFFFF;
    letter-spacing: 0.02em;
    z-index: 1;
}

.checkbox--residential:before {
  content: "Residential";
  transform-origin: right center;
  animation: switch-on-transform 0.25s ease-out forwards;
}
.checkbox--business:before {
  content: "Business";
  transform-origin: left center;
  animation: switch-off-transform 0.25s ease-out forwards;
}

.checkbox--residential:after {
  content: "Business";
  left: 40px;
}
.checkbox--business:after {
  content: "Residential";
  right: 40px;
}

.checkbox:focus {
  color: white;
  border-color: transparent;
  background-color: #72BF44;
  outline: none;
}

.checkbox:checked {
  color: white;
  background-color: $green;
  border-color: transparent;
}

@keyframes switch-on-transform {
    0% { transform: translateX(0) scaleX(1) translateZ(0); }
   25% { transform: translateX(0) scaleX(1.33) translateZ(0); }
  100% { transform: translateX(100%) scaleX(1) translateZ(0); }
}

@keyframes switch-off-transform {
    0% { transform: translateX(100%) scaleX(1) translateZ(0) }
   25% { transform: translateX(100%) scaleX(1.33) translateZ(0) }
  100% { transform: translateX(0) scaleX(1) translateZ(0) }
}
</style>

<script>

import { mapState } from 'vuex'

export default {
  name: 'SwitchMode',
  props: {
    mode: String
  },
  data () {
    return {
      checkbox: null,
      value: null
    }
  },
  computed: {
    ...mapState({
      screen: 'viewportWidth'
    }),
    activeClass () {
      return `checkbox--${this.value}`
    },
    passiveClass () {
      return `checkbox--${this.value === 'residential' ? 'buisiness' : 'residential'}`
    },
    width () {
      return this.screen < 960 ? '305px' : '360px'
    },
    height () {
      return this.screen < 960 ? '48px' : '60px'
    },
    fontSize () {
      return this.screen >= 960 ? '16px' : '13px'
    },
    paddingTop () {
      return this.screen >= 960 ? '20px' : '12px'
    },
    top () {
      return this.screen >= 960 ? '16px' : '12px'
    }
  },
  watch: {
    screen (val) {
      this.changeViewport()
    },
    mode (val) {
      this.value = val
    },
    activeClass (val) {
      //
    },
    passiveClass (val) {
      //
    }
  },
  methods: {
    changeViewport () {
      [
        { name: '--switch-height', value: this.height },
        { name: '--switch-width', value: this.width },
        { name: '--switch-font-size', value: this.fontSize },
        { name: '--switch-padding-top', value: this.paddingTop },
        { name: '--switch-top', value: this.top }
      ].forEach(item => document.documentElement.style.setProperty(item.name, item.value))
    }
  },
  mounted () {
    this.changeViewport()
    this.value = this.mode
    this.checkbox = document.querySelector('input[type="checkbox"]')
    this.checkbox.onclick = function (event) {
      this.value = this.value === 'residential' ? 'business' : 'residential'
      this.$emit('update:mode', this.value)
      event.target.classList.replace(this.activeClass, this.passiveClass)
    }.bind(this)
  }
}
</script>
