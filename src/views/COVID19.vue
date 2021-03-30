<template>
  <v-container fluid>
    <v-main tag="main" class="homefone">
      <!-- ============================= HOME ============================= -->
      <section id="top">
        <div class="base-title">
          <a href="#top" class="mr-2 d-inline-flex core-goto text--primary"></a>
          <CovidMain />
        </div>
      </section>
    </v-main>
  </v-container>
</template>

<style>

</style>

<script>
import CovidMain from '@/components/home/CovidMain.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Covid',
  data () {
    return {
      page: null
    }
  },
  components: {
    CovidMain
  },
  computed: {
    ...mapState(['plan', 'pages', 'selectors']),
    ...mapGetters('clientInfo', ['address', 'addressAvailable'])
  },
  watch: {
    page (val) {
      if (this.pages[val] === 'Contact Us') {
        this.$router.push({ name: 'contact' })
        return
      }
      if (this.pages[val] === 'Connect') {
        this.$router.push({ name: 'connect' })
        return
      }
      this.$router.push({ name: 'home', params: { page: val } })
    }
  }
}
</script>
