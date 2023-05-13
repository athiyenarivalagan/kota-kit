import React from 'react'
import { Outlet, useLoaderData, useNavigation } from "react-router-dom"
import { getProjects } from "../services/projects"
import { Layout, theme } from 'antd'
import AppHeader from "../components/common/AppHeader"
import SideBar from "../components/common/SideBar"

const { Header, Content, Sider } = Layout;

export async function loader() {
    const projects = await getProjects()
    return { projects }
}

const Dashboard = () => {
    const { projects } = useLoaderData()
    const navigation = useNavigation()
    const {
        token: { colorBgContainer },
      } = theme.useToken();

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
             <SideBar projects={projects}/>
            </Sider>
            <Layout>
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
          </Layout>
        </Layout>
      )
}

export default Dashboard
