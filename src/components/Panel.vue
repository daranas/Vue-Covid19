<template>
  <div id="col" class="panel">
    <div class="panel-content">
      <v-select :options="countryOptions" :reduce="country => country.code" label="country" />
      <h1 class="panel-title">Indonesia</h1>
      <div class="row">
        <div class="col-md-4">
          <div class="card item-stat">
            <h6>Terkonfirmasi</h6>
            <h1>1.450.000</h1>
          </div>
        </div>
        <div class="col-md-4 item-stat">
          <div class="card item-stat">
            <h6>Sembuh</h6>
            <h1 class="tx-success">450</h1>
          </div>
        </div>
        <div class="col-md-4 item-stat">
          <div class="card item-stat">
            <h6>Meninggal</h6>
            <h1 class="tx-danger">450</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countryCode from '../assets/json/country.json'
export default {
  data () {
    return {
      countryOptions: countryCode.country_codes
    }
  }
}
</script>

<style lang="scss">
  .panel {
    background: #f8f9fc;
    .panel-content {
      padding: 2rem;
      .panel-title {
        margin-top: 20px;
        margin-bottom: 20px;
        opacity: 0.2;
        font-size: 22px;
        text-transform: uppercase;
      }

      .item-stat {
        text-align: center;
        h6 {
          color: #8392a5;
          font-size: 11px;
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
      }
    }
  }
</style>
