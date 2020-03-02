<template>
  <div class="d-flex justify-center">
    <div style="position: relative; width: 220px">
      <v-btn
              text
              outlined
              rounded
              width="220"
              height="40"
              class="green-border"
                color="#20731C"
                @click="clickHandler('Menu button event\n', $event)"
      >
                  {{ selected }}
                  <v-spacer></v-spacer>
              <v-icon class="ml-10">mdi-chevron-down</v-icon>
      </v-btn>
      <v-slide-y-transition>
        <v-list v-if="visible" @mouseleave.native="visible=false" light class="menu" transition="expand">
          <v-list-item @click="selectionHandler('Yes')" class="menu-item">
            <v-list-item-title>Yes</v-list-item-title>
          </v-list-item>
          <v-list-item @click="selectionHandler('No')" class="menu-item">
            <v-list-item-title>No</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-slide-y-transition>
    </div>
  </div>
</template>

<style>
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
    confirm: Boolean
  },
  data () {
    return {
      selected: 'Yes',
      visible: false
    }
  },
  methods: {
    clickHandler (message, event) {
      console.log(message, event)
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
