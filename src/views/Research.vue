<template>
  <div class="about">
    <CardsShow :properties="properties"/>
  </div>
</template>

<style>
</style>

<script>
import CardsShow from '@/components/CardsShow.vue'

export default {
  name: 'Research',

  components: {
    CardsShow
  },

  data: () => ({
    //
  })
}

</script>
