import { React, useState, useEffect } from 'react'
import { Outlet, useLoaderData, redirect, useNavigation, Navigate } from "react-router-dom"
import { getProjects, createProject } from "../services/projects"
import { Layout, theme } from 'antd'
import AppHeader from "../components/common/AppHeader"
import SideBar from "../components/common/SideBar"
// import { Form } from 'react-router-dom'

const { Content, Sider } = Layout

export async function loader({ request }) {
  let token = JSON.parse(localStorage.getItem('user'))?.token 
  if (!token) {
    redirect('/login')
    return null
  }
  const projects = await getProjects()
  return { projects }
  
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log(updates)
  const newProject = await createProject(updates)
  return redirect(`/project/${newProject.id}`)
}

export default function Dashboard () {
  // const [projects, setProjects] = useState([])

  // useEffect(() => {
  //   getProjects()
  //     .then(res => {
  //       console.log(res)
  //       setProjects(res)
  //     })
  // }, [])
  // console.log("This is reached")
  const { projects } = useLoaderData()
  const navigation = useNavigation()
  
  const {
      token: { colorBgContainer },
    } = theme.useToken()


  return (
    <Layout>
      <AppHeader />
      <Layout>
        <Sider
          width={300}
          theme={'light'}
          style={{
            background: colorBgContainer,
          }}
        >
          <SideBar projects={ projects } />
        </Sider>
        <Content
          style={{
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
        <div
          id="detail"
          className={
            navigation.state === "loading" ? "loading" : ""
          }
        >
          <Outlet />
        </div>
        </Content>
      </Layout>
    </Layout>
  )
}