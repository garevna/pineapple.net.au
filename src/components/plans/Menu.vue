<template>
  <div class="d-flex justify-center">
    <div style="position: relative; width: 220px">
      <v-btn
              text
              outlined
              rounded
              :width="menuWidth"
              height="40"
              :style="{ border: border, fontSize: font }"
              :color="color || '#20731C'"
              @click="clickHandler('Menu button event\n', $event)"
      >
                  {{ selected }}
                  <v-spacer></v-spacer>
              <v-icon class="ml-10">mdi-chevron-down</v-icon>
      </v-btn>
      <v-slide-y-transition>
        <v-list v-if="visible" @mouseleave.native="visible=false" light class="menu" transition="expand">
          <v-list-item @click="selectionHandler('Yes')" class="menu-item" :style="{ fontSize: font }">
            <v-list-item-title>Yes</v-list-item-title>
          </v-list-item>
          <v-list-item @click="selectionHandler('No')" class="menu-item" :style="{ fontSize: font }">
            <v-list-item-title>No</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-slide-y-transition>
    </div>
  </div>
</template>

<style scoped>
.menu {
  position: absolute;
  top: 40px;
  left: 10px;
  width: 200px;
  border-top: solid 1px #20731C40!important;
  border-bottom: solid 1px #20731C80!important;
  border-left: solid 1px #20731C50!important;
  border-right: solid 1px #20731C90!important;
  background: #fff!important;
  z-index:10;
  transition: all 0.5s;
}

.menu-item {
  color: #555;
}
.menu-item:hover {
  background: #20731C50;
  color: #20731C;
}
</style>

<script>

export default {
  name: 'Menu',
  props: {
    confirm: Boolean,
    fontSize: [String, Number],
    color: String,
    width: [Number, String]
  },
  data () {
    return {
      selected: 'Yes',
      visible: false
    }
  },
  computed: {
    border () {
      return `solid 1px ${this.color || '#20731C'}`
    },
    font () {
      return this.fontSize || '16px'
    },
    menuWidth () {
      return this.width || 220
    }
  },
  methods: {
    clickHandler (message, event) {
      this.visible = !this.visible
    },
    selectionHandler (value) {
      this.selected = value
      this.$emit('update:confirm', value === 'Yes')
      this.visible = false
    }
  }
}
</script>
