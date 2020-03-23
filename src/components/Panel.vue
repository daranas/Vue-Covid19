<template>
  <div id="col" class="panel">
    <div class="panel-content">
      <v-select v-model="countrySelected" :options="countryOptions" label="country" :clearable="false" @input="setSelected" />
      <p class="last-update">Pembaharuan Terakhir: <span>{{ countryData.lastUpdate | moment("D MMM, YYYY - h:mm:ss a") }}</span></p>
      <div class="row">
        <div class="col-md-4 col-xs-12 col-sm-12">
          <div class="card item-stat">
            <h6>Terkonfirmasi</h6>
            <h1>{{ countryData.confirmed.value | numeral('0,0') }}</h1>
          </div>
        </div>
        <div class="col-md-4 col-xs-12 col-sm-12 item-stat">
          <div class="card item-stat">
            <h6>Sembuh</h6>
            <h1 class="tx-success">{{ countryData.recovered.value | numeral('0,0') }}</h1>
          </div>
        </div>
        <div class="col-md-4 col-xs-12 col-sm-12 item-stat">
          <div class="card item-stat last">
            <h6>Meninggal</h6>
            <h1 class="tx-danger">{{ countryData.deaths.value | numeral('0,0') }}</h1>
          </div>
        </div>
      </div>
    </div>
    <div>
      <ve-line :data="chartData" :settings="chartSettings"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_DATA } from '@/store/actions'
import countryCode from '@/assets/json/country.json'
import VeLine from 'v-charts/lib/line.common'
export default {
  data () {
    return {
      countrySelected: 'Indonesia',
      countryOptions: countryCode.country_codes,
      chartData: {
        columns: ['date', 'cost', 'profit', 'growthRate', 'people'],
        rows: [
          { date: '01/01', cost: 1523, profit: 1523, growthRate: 0.12, people: 100 },
          { date: '01/02', cost: 1223, profit: 1523, growthRate: 0.345, people: 100 },
          { date: '01/03', cost: 2123, profit: 1523, growthRate: 0.7, people: 100 },
          { date: '01/04', cost: 4123, profit: 1523, growthRate: 0.31, people: 100 },
          { date: '01/05', cost: 3123, profit: 1523, growthRate: 0.12, people: 100 },
          { date: '01/06', cost: 7123, profit: 1523, growthRate: 0.65, people: 100 }
        ]
      },
      chartSettings: {
        stack: { sell: ['cost', 'profit'] },
        area: true
      }
    }
  },
  mounted () {
    this.$store.dispatch(FETCH_DATA)
  },
  computed: {
    ...mapGetters(['countryData'])
  },
  methods: {
    setSelected (value) {
      this.$store.dispatch(FETCH_DATA, value)
    }
  },
  components: { VeLine }
}
</script>

<style lang="scss">
  .panel {
    background: #f8f9fc;
    .panel-content {
      padding: 2rem;
      .last-update {
        color: #8094ae;
        font-size: 12px;
        margin-top: 8px;
        margin-bottom: 30px;
        span {
          color: #155724;
        }
      }

      .item-stat {
        text-align: center;
        h6 {
          color: #8392a5;
          font-size: 12px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin: 0 0 5px;
        }

        h1 {
          font-size: 36px;
          margin-top: 0;
          margin-bottom: 0;
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
