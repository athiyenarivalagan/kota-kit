import axios from 'axios'
const baseUrl = '/api/projects'
const token = JSON.parse(localStorage.getItem('user'))?.token 

export async function getProjects() {
  const res = await axios.get(baseUrl, {
      headers: {
          Authorization:`Bearer ${token}`
      }
    })
  return res.data
}

export async function createProject(newObject) {
  const res = await axios.post(baseUrl, newObject, {
    headers: {
        Authorization:`Bearer ${token}`
    }
  })
  return res.data
}

export async function getProject(id) {
  const res = await axios.get(`${baseUrl}/${id}`, {
    headers: {
        Authorization:`Bearer ${token}`
    }
  })
  return res.data
}

export async function updateProject(id, newObject) {
  const res = await axios.patch(`${baseUrl}/${id}`, newObject, {
    headers: {
        Authorization:`Bearer ${token}`
    }
  })
  return res.data
}

export async function deleteProject(id) {
  const res = await axios.delete(`${baseUrl}/${id}`, {
    headers: {
        Authorization:`Bearer ${token}`
    }
  })
  return res.data
}