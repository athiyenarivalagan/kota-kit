import axios from 'axios'
const baseUrl = '/api/projects'

export async function getProjects() {
  const res = await axios.get(baseUrl)
  return res.data
}

export async function createProject(newObject) {
  const res = await axios.post(baseUrl, newObject)
  return res.data
}

export async function getProject(id) {
  const res = await axios.get(`${baseUrl}/${id}`)
  return res.data
}

export async function updateProject(id, newObject) {
  const res = await axios.put(`${baseUrl}/${id}`, newObject)
  return res.data
}

export async function deleteProject(id) {
  const res = await axios.delete(`${baseUrl}/${id}`)
  return res.data
}