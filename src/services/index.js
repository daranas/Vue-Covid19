import API from '@/helpers/API'

export const getGlobalData = () => {
  return API.get('/')
}

export const getData = (slug) => {
  return API.get('/countries/' + slug)
}
