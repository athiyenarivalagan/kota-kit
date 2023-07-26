import axios from 'axios'
const baseUrl = '/api/projects'
let token

export async function getProjects() {
  token = JSON.parse(localStorage.getItem('user'))?.token 
  const res = await axios.get(baseUrl, {
      headers: {
          Authorization:`Bearer ${token}`
      }
    })
  return res.data
}

export async function createProject(newObject) {
  token = JSON.parse(localStorage.getItem('user'))?.token 
  const res = await axios.post(baseUrl, newObject, {
    headers: {
        Authorization:`Bearer ${token}`
    }
  })
  return res.data
}

export async function getProject(id) {
  token = JSON.parse(localStorage.getItem('user'))?.token 
  const res = await axios.get(`${baseUrl}/${id}`, {
    headers: {
        Authorization:`Bearer ${token}`
    }
  })
  return res.data
}

export async function updateProject(id, newObject) {
  token = JSON.parse(localStorage.getItem('user'))?.token 
  const res = await axios.patch(`${baseUrl}/${id}`, newObject, {
    headers: {
        Authorization:`Bearer ${token}`
    }
  })
  return res.data
}

export async function deleteProject(id) {
  token = JSON.parse(localStorage.getItem('user'))?.token 
  const res = await axios.delete(`${baseUrl}/${id}`, {
    headers: {
        Authorization:`Bearer ${token}`
    }
  })
  return res.data
}