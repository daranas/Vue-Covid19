import API from '@/helpers/API'

export const getData = (slug) => {
  return API.get('/countries/' + slug)
}
