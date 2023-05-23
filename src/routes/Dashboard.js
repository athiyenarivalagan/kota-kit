import { React, useEffect } from 'react'
// import { Outlet, useLoaderData, useNavigation } from "react-router-dom"
import { Outlet, useLoaderData } from "react-router-dom"
import { getProjects, createProject } from "../services/projects"
import { Layout, theme } from 'antd'
import AppHeader from "../components/common/AppHeader"
import SideBar from "../components/common/SideBar"
// import FooterBar from "../components/common/FooterBar"

// const { Content, Sider, Footer } = Layout
const { Content, Sider } = Layout

export async function loader({ request }) {
  const url = new URL(request.url)
  const q = url.searchParams.get("q")
  const projects = await getProjects(q)
  return { projects }
}

export async function action() {
  const project = await createProject()
  return { project }
}

export default function Dashboard () {
  const { projects, q } = useLoaderData()
  // console.log(projects)
  // const navigation = useNavigation()
  const {
      token: { colorBgContainer },
    } = theme.useToken()

    useEffect(() => {
      document.getElementById("q").value = q;
    }, [q]); 

  return (
    <Layout>
      <AppHeader defaultValue={ q } />
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
        {/* <div
          id="detail"
          className={
            navigation.state === "loading" ? "loading" : ""
          }
        > */}
          <Outlet />
        {/* </div> */}
        </Content>
      </Layout>
      {/* <Footer>
        <FooterBar />
      </Footer> */}
    </Layout>
  )
}