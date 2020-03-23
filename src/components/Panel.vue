<template>
  <div id="col" class="panel">
    <div class="panel-content">
      <v-select v-model="countrySelected" :options="countryOptions" label="country" :clearable="false" @input="setSelected" />
      <p class="last-update">Pembaruan Terakhir: <span class="tx-default">{{ countryData.lastUpdate | moment("D MMM YYYY h:mm:ss a") }}</span></p>
      <div class="row">
        <div class="col-md-4 col-xs-12 col-sm-12">
          <div class="card item-stat">
            <h6>Terkonfirmasi</h6>
            <h1>{{ countryData.confirmed.value | numeral('0,0') }}</h1>
            <img src="../assets/images/stat1.png">
          </div>
        </div>
        <div class="col-md-4 col-xs-12 col-sm-12 item-stat">
          <div class="card item-stat">
            <h6 class="tx-success">Sembuh</h6>
            <h1>{{ countryData.recovered.value | numeral('0,0') }}</h1>
            <img src="../assets/images/stat2.png">
          </div>
        </div>
        <div class="col-md-4 col-xs-12 col-sm-12 item-stat">
          <div class="card item-stat last">
            <h6 class="tx-danger">Meninggal</h6>
            <h1>{{ countryData.deaths.value | numeral('0,0') }}</h1>
            <img src="../assets/images/stat3.png">
          </div>
        </div>
      </div>
    </div>
    <div class="panel-global">
      <h1 class="panel-title">Global</h1>
      <div class="row global-counter">
        <div class="col-md-4 col-sm-4 col-xs-4 item">
          <h6>Terkonfirmasi</h6>
          <div class="rounded-circle bg-warning"></div>
          <h1>{{ setGlobalData.confirmed.value | numeral('0,0') }}</h1>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-4 item">
          <h6>Sembuh</h6>
          <div class="rounded-circle bg-success"></div>
          <h1>{{ setGlobalData.recovered.value | numeral('0,0') }}</h1>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-4 item">
          <h6>Meninggal</h6>
          <div class="rounded-circle bg-danger"></div>
          <h1><h1>{{ setGlobalData.deaths.value | numeral('0,0') }}</h1></h1>
        </div>
      </div>
      <ve-line :data="chartData" :settings="chartSettings"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_DATA } from '@/store/actions'
import { getDataGlobal, getDataGlobalDaily } from '@/services'
import countryCode from '@/assets/json/country.json'
import VeLine from 'v-charts/lib/line.common'
export default {
  data () {
    return {
      countrySelected: 'Indonesia',
      countryOptions: countryCode.country_codes,
      setGlobalData: {
        confirmed: {
          value: 0
        },
        recovered: {
          value: 0
        },
        deaths: {
          value: 0
        }
      },
      chartData: {
        columns: ['Tanggal', 'Terkonfirmasi', 'Sembuh'],
        rows: []
      },
      chartSettings: {
        area: true
      }
    }
  },
  methods: {
    setSelected (value) {
      this.$store.dispatch(FETCH_DATA, value)
    },
    renderGlobalData () {
      getDataGlobal().then(response => {
        const { data } = response
        this.setGlobalData = data
      })
    },
    renderGlobalDataDaily () {
      getDataGlobalDaily().then(response => {
        const { data } = response
        for (let i = 0; i < data.length; i++) {
          const chartItem = {
            Tanggal: this.$moment(data[i].reportDate).format('D/MM'),
            Terkonfirmasi: data[i].totalConfirmed,
            Sembuh: data[i].totalRecovered
          }
          this.chartData.rows.push(chartItem)
        }
      })
    }
  },
  computed: {
    ...mapGetters(['countryData'])
  },
  mounted () {
    this.$store.dispatch(FETCH_DATA)
    this.renderGlobalData()
    this.renderGlobalDataDaily()
  },
  components: { VeLine }
}
</script>

<style lang="scss">
  .panel {
    .panel-content {
      padding: 2rem;
      .last-update {
        color: #8392a5;
        font-size: 12px;
        margin-top: 8px;
        margin-bottom: 30px;
      }

      .item-stat {
        text-align: center;
        padding-bottom: 10px;
        h6 {
          color: #8392a5;
          font-size: 11px;
          letter-spacing: .5px;
          text-transform: uppercase;
          margin: 0 0 5px;
        }

        h1 {
          font-size: 34px;
          font-family: 'Rubik', sans-serif;
          margin-top: 0;
          margin-bottom: 0;
        }
        img {
          margin-top: 10px;
        }
      }

      .vs__dropdown-toggle {
        background: #ffffff;
        border: 1px solid rgba(72, 94, 144, 0.16);
        padding: 5px 8px 8px 5px;
      }
      .vs__dropdown-menu {
        border-color: rgba(72, 94, 144, 0.16)!important;
        box-shadow: none;
      }
      .vs__selected {
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
      }
    }
  }

  .panel-global {
    padding: 0 2rem 2rem;
    .panel-title {
      opacity: 0.2;
      font-size: 22px;
      margin-top: 5px;
      letter-spacing: -.5px;
      text-transform: uppercase;
    }
    .ve-line {
      margin-left: -2rem;
      margin-right: -2rem;
    }
    .global-counter {
      margin-bottom: 20px;
      .item {
        h6 {
          color: #8392a5;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin: 0 0 10px;
        }
        h1 {
          font-size: 18px;
          font-family: 'Rubik', sans-serif;
          display: inline-block;
          margin: 0;
        }
        .rounded-circle {
          height: 10px;
          width: 10px;
          float: left;
          margin-right: 5px;
          margin-top: 7px;
          border-radius: 50% !important;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .item-stat {
      border-radius: 0!important;
      border-bottom-width: 0!important;
    }
    .item-stat.last {
      border-bottom-width: 1px!important;
    }
  }
</style>
