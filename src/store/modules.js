import { getData } from '@/services'
import { FETCH_DATA } from './actions'
import { SET_DATA } from './mutations'

const state = {
  data: {
    confirmed: {
      value: 0
    },
    recovered: {
      value: 0
    },
    deaths: {
      value: 0
    },
    lastUpdate: null,
    geolocation: {
      country: '',
      alpha2: '',
      alpha3: '',
      numeric: null,
      latitude: null,
      longitude: null
    }
  }
}

const defaultCountry = {
  country: 'Indonesia',
  alpha2: 'ID',
  alpha3: 'IDN',
  numeric: 360,
  latitude: -5,
  longitude: 120
}

const actions = {
  async [FETCH_DATA] (context, payload) {
    const countryCode = !payload ? 'ID' : payload.alpha2
    await getData(countryCode).then(result => {
      const { data } = result
      data.geolocation = !payload ? defaultCountry : payload
      context.commit(SET_DATA, data)
      return data
    }).catch(() => {
      alert('Data tidak tersedia')
    })
  }
}

const mutations = {
  [SET_DATA] (state, data) {
    state.data = data
  }
}

const getters = {
  countryData (state) {
    return state.data
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
