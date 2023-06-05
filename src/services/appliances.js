import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/Appliances'

export async function getAppliances() {
  const res = await axios.get(baseUrl)
  return res.data
}

export async function createAppliance(newObject) {
  const res = await axios.post(baseUrl, newObject)
  return res.data
}

export async function getAppliance(id) {
  const res = await axios.get(`${baseUrl}/${id}`)
  return res.data
}

export async function updateAppliance(id, newObject) {
  console.log(id)
  const res = await axios.put(`${baseUrl}/${id}`, newObject)
  return res
}

export async function removeAppliance(id) {
  const res = await axios.delete(`${baseUrl}/${id}`)
  return res
}