import { React, useEffect } from 'react'
import { Outlet, useLoaderData, redirect, useNavigation } from "react-router-dom"
import { getProjects, createProject } from "../services/projects"
import { Layout, theme } from 'antd'
import AppHeader from "../components/common/AppHeader"
import SideBar from "../components/common/SideBar"
// import { Form } from 'react-router-dom'

const { Content, Sider } = Layout

export async function loader({ request }) {
  const url = new URL(request.url)
  const q = url.searchParams.get("q")
  // console.log(q) // contains the search url
  console.log(getProjects(q));
  const projects = await getProjects('kozey junction')
  return { projects, q }
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const newProject = await createProject(updates)
  return redirect(`/project/${newProject.id}`)
}

export default function Dashboard () {
  const { projects, q } = useLoaderData()
  const navigation = useNavigation()

  const {
      token: { colorBgContainer },
    } = theme.useToken()

    // adding a search spinner
    // const searching =
    // navigation.location &&
    // new URLSearchParams(navigation.location.search).has(
    //   "q"
    // )

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q])

  return (
    <Layout>
      <AppHeader projects={ projects } />
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
        {/* input a react-router-dom Form for testing the search input */}
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