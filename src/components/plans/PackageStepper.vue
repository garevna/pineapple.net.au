<template>
  <v-carousel v-model="step" height="420" hide-delimiter-background>
    <v-carousel-item
        v-for="(currentPackage, index) in packages"
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

import { mapState, mapGetters } from 'vuex'

import PackageCard from '@/components/plans/PackageCard.vue'

export default {
  name: 'PackageStepper',

  components: {
    PackageCard
  },

  props: ['selected'],

  data: () => ({
    step: 1
  }),

  computed: {
    ...mapState(['plan']),
    ...mapState('internetPlans', { source: 'packages' }),
    ...mapGetters('internetPlans', {
      getLink: 'link',
      plan: 'planName',
      tariff: 'tariff'
    }),
    packages () {
      return this.source[this.plan]
    },
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
