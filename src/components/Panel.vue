<template>
  <div id="col" class="panel">
    <div class="panel-content">
      <v-select v-model="countrySelected" :options="countryOptions" label="country" />
      <p class="last-update">Update Terakhir: <span>2020-03-22</span></p>
      <div class="row">
        <div class="col-md-4 col-xs-12 col-sm-12">
          <div class="card item-stat">
            <h6>Terkonfirmasi</h6>
            <h1>{{ data.confirmed }}</h1>
          </div>
        </div>
        <div class="col-md-4 col-xs-12 col-sm-12 item-stat">
          <div class="card item-stat">
            <h6>Sembuh</h6>
            <h1 class="tx-success">{{ data.recovered }}</h1>
          </div>
        </div>
        <div class="col-md-4 col-xs-12 col-sm-12 item-stat">
          <div class="card item-stat last">
            <h6>Meninggal</h6>
            <h1 class="tx-danger">{{ data.deaths }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countryCode from '../assets/json/country.json'
import { getDefaultData } from '../services'
export default {
  data () {
    return {
      data: {
        confirmed: 0,
        recovered: 0,
        deaths: 0,
        update: 0
      },
      countrySelected: 'Indonesia',
      countryOptions: countryCode.country_codes
    }
  },
  methods: {
    renderData () {
      getDefaultData().then((data) => {
        const resultData = {
          confirmed: data.confirmed.value,
          recovered: data.recovered.value,
          deaths: data.deaths.value,
          update: 0
        }
        this.data = resultData
      })
    }
  },
  mounted () {
    this.renderData()
  }
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
