import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/v1/'
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjY0ZmVhODU5ZGNlODhmMjFhYjg4ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDEzMjA0NiwiZXhwIjoxNjM0MzkxMjQ2fQ.ZWUbQ_LhIiZfpKJWx3vkSRAA-PhkHvoEMumKWdtTuJ8'

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
})
