import axios from 'axios'

// const api = axios.create({
//   baseURL: process.env.BASE_API,
// })

export default axios.create({
  baseURL: 'https://pg-api-francisco.herokuapp.com',
})
