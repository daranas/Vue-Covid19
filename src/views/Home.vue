<template>
  <div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Panel />
    <Panel />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Panel from '@/components/Panel'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Panel
  }
}
</script>
