import axios from 'axios'
const baseUrl = 'http://localhost:3001/projects'

export async function getProjects() {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export async function createProject(newObject) {
  const request = axios.post(baseUrl, newObject)
  const response = await request
  return response.data
}

export async function getProject(id) {
  const request = axios.get(`${baseUrl}/${id}`)
  const response = await request
  return response.data
}

export async function updateProject(id, newObject) {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  const response = await request
  return response.data
}

export async function removeProject(id) {
  const request = axios.delete(`${baseUrl}/${id}`)
  const response = await request
  return response.data
}