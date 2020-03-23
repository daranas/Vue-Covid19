<template>
  <div id="app">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <router-view/>
  </div>
</template>

<script>
const metaCard = 'https://covid19.mathdro.id/api/countries/Indonesia/og'
export default {
  metaInfo: {
    title: 'Data Penyebaran COVID-19 di Indonesia dan Dunia',
    titleTemplate: '%s | DaranaSV',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // twitter
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'Data Penyebaran COVID-19 di Indonesia dan Dunia' },
      { name: 'twitter:description', content: 'Visualisasi dan rangkuman data penyebaran COVID-19 di Indonesia dan dunia mengunakan VueJS' },
      { name: 'twitter:image', content: metaCard },
      // facebook
      { property: 'og:title', content: 'Data Penyebaran Corona di Indonesia dan Dunia' },
      { property: 'og:site_name', content: 'Data Penyebaran Corona di Indonesia dan Dunia' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: metaCard },
      { property: 'og:description', content: 'Visualisasi dan rangkuman data penyebaran COVID-19 di Indonesia dan dunia mengunakan VueJS' }
    ]
  }
}
</script>
