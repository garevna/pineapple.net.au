<template>
  <v-carousel v-model="step" height="420" hide-delimiter-background>
    <v-carousel-item
        v-for="(currentPackage, index) in packages[plan]"
        :key="index"
        :step="index + 1"
      >
        <PackageCard
          :index="index"
          :selected.sync="selectedCard"
          class="mx-auto"
        />
    </v-carousel-item>
  </v-carousel>
</template>

<script>

import { mapState } from 'vuex'

import PackageCard from '@/components/plans/PackageCard.vue'

export default {
  name: 'PackageStepper',
  components: {
    PackageCard
  },
  props: {
    selected: Number /* sync */
  },
  data: () => ({
    step: 1
  }),
  computed: {
    ...mapState(['plan']),
    ...mapState('internetPlans', ['packages']),
    selectedCard: {
      get () {
        return this.selected
      },
      set (val) {
        this.$emit('update:selected', val)
      }
    }
  }
}
</script>
