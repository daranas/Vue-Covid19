<template>
  <div>
    <Map />
    <Panel />
    <Footer />
  </div>
</template>

<script>
import Panel from '@/components/Panel'
import Map from '@/components/Map'
import Footer from '@/components/Footer'

export default {
  name: 'Home',
  components: {
    Panel,
    Map,
    Footer
  }
}
</script>
