import API from '@/helpers/API'

export const getData = (slug) => {
  return API.get('/countries/' + slug)
}

export const getDataGlobal = () => {
  return API.get('')
}

export const getDataGlobalDaily = () => {
  return API.get('/daily')
}
