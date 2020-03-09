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
  name: 'About',

  components: {
    CardsShow
  },

  data: () => ({
    properties: [
      {
        title: 'Girl',
        image: 'https://cdn.vuetifyjs.com/images/lists/ali.png',
        records: ['drag', 'wash', 'blue', 'sample'],
        text: 'Some global configurations for @vue/cli, such as your preferred package manager and your locally saved presets, are stored in a JSON file named .vuerc in your home directory. You can edit this file directly with your editor of choice to change the saved options.'
      },
      {
        title: 'Gas station',
        image: 'https://cdn.vuetifyjs.com/images/cards/store.jpg',
        records: ['trigger', 'mount', 'figure', 'prom'],
        text: 'Помимо встроенных директив (таких как v-model и v-show), Vue позволяет использовать ваши собственные'
      },
      {
        title: 'Beach',
        image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
        records: ['Australian', 'beaches', 'top', '10'],
        text: 'Все аргументы, кроме el, следует понимать как только для чтения и никогда не изменять их'
      },
      {
        title: 'House',
        image: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        records: ['home', 'house', 'hotel', 'places'],
        text: 'While the concepts of functional components and render functions are really entirely separate, they are closely associated in the Vue.js documentation (explanation of functional components is nested within the ‘Render Functions & JSX’ page), and I’ve seen very few examples out there of functional components with a traditional template.\nSo, we better figure out render functions too.'
      },
      {
        title: 'Road',
        image: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        records: ['road', 'way', 'people', 'travel'],
        text: 'By default, Vue CLI assumes your app will be deployed at the root of a domain, e.g. https://www.my-app.com/.\nIf your app is deployed at a sub-path, you will need to specify that sub-path using this option.\nFor example, if your app is deployed at https://www.foobar.com/my-app/, set publicPath to "/my-app/".'
      }
    ]
  })
}

</script>
