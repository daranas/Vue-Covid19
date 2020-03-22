<template>
  <div id="col" class="map">
    <l-map
      :zoom="zoom"
      :center="center"
      scrollWheelZoom:false
      style="height: 100vh"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-marker :lat-lng="center">
        <l-icon
          :icon-anchor="staticAnchor"
          class-name="icon-marker"
        >
          <img src="../assets/images/virus.png">
          <div class="number">{{ customText }}</div>
        </l-icon>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LIcon } from 'vue2-leaflet'
import L from 'leaflet'

// remove default marker
L.Icon.Default.imagePath = '/'
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

export default {
  name: 'Icon',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon
  },
  data () {
    return {
      zoom: 3.5,
      center: L.latLng(-5, 120),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      staticAnchor: [16, 37],
      customText: 450
    }
  }
}
</script>

<style lang="scss">
  .map {
    h1 {
      margin: 0;
    }
    .icon-marker {
      position: relative;
      img {
        height: 56px;
        width: 56px;
        position: absolute;
        left: -60px;
        top: -15px;
      }
      .number {
        font-size: 32px;
        font-weight: bold;
      }
    }
  }
  @media (max-width: 768px) {
    .vue2leaflet-map {
      height: 200px!important;
    }
    .icon-marker {
      img {
        height: 38px!important;
        width: 38px!important;
        left: -40px!important;
        top: -9px!important;
      }
      .number {
        font-size: 24px!important;
      }
    }
  }
</style>
