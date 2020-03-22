<template>
  <div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Map />
    <Panel />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Panel from '@/components/Panel'
import Map from '@/components/Map'
import Footer from '@/components/Footer'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Panel,
    Map,
    Footer
  }
}
</script>
