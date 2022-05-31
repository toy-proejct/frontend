import axios from "axios"

export const client = axios.create({
  baseURL: "https://key-value.p-e.kr",
  withCredentials: true,
})
