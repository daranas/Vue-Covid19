import axios from 'axios'

export default axios.create({
  baseURL: 'https://covid19.mathdro.id/api',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json'
  }
})
