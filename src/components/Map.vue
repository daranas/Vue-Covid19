<template>
  <div id="col" class="map">
    <l-map
      :zoom="zoom"
      :center="center"
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
import { latLng } from 'leaflet'

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
      zoom: 4,
      center: latLng(-5, 120),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      staticAnchor: [16, 37],
      customText: '12'
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
        left: -40px;
        top: 0px;
      }
      .number {
        font-size: 32px;
        font-weight: bold;
        padding-left: 20px;
      }
    }
  }
</style>
