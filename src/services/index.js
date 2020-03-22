import API from '../helpers/API'

export function getDefaultData () {
  const data = API.get('/countries/ID').then(response => response.data)
  return data
}

export default {
  getDefaultData
}
