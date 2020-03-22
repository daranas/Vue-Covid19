<template>
  <div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Panel />
    <Map />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Panel from '@/components/Panel'
import Map from '@/components/Map'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Panel,
    Map
  }
}
</script>
