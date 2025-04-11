import axios from 'axios'
import { FIREBASE_URL } from './firebase'

export const getData = async (collection) => {
  const res = await axios.get(`${FIREBASE_URL}/${collection}.json`)
  return res.data || {}
}

export const postData = async (collection, data) => {
  const res = await axios.post(`${FIREBASE_URL}/${collection}.json`, data)
  return res.data
}
