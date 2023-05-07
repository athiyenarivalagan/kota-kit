import React from 'react'
import { useState, useEffect } from 'react'
import { Layout } from 'antd'
import axios from 'axios'
import './App.css'
import 'antd/dist/reset.css'

import AppHeader from './components/common/AppHeader' 
import SideBar from './components/common/SideBar'
import ProjectMenu from './components/ProjectMenu'
import Content from './components/Content'
// import Footer from './components/common/Footer'


const App = () => {
  const [projects, setProjects] = useState([])
  const [contentIndex, setContentIndex] = useState(0)
  const [selectedKey, setSelectedKey] = useState("0")
  const [displayedProject, setDisplayedProject] = useState(0)

  const changeSelectedKey = event => {
    const key = event.key // key stores the project.id
    setSelectedKey(key)
    setContentIndex(+key)
  }

  useEffect(() => {
    axios
      .get('http://localhost:3001/projects')
      .then(response => {
        console.log('promise fullfilled')
        setProjects(response.data)
      })
  }, [])

  const Menu = (
    <ProjectMenu
    projects={projects}
    selectedKeys={selectedKey}
    changeSelectedkey={changeSelectedKey}
     />
  )

  
  return (
      <div>
        <Layout>
            <AppHeader menu={Menu} /> 
          <Layout>
            <SideBar menu={Menu} /> 
            <Content project={displayedProject} />
            {/* <Content projects={projects} /> */}
          </Layout>
          {/* <Footer /> */}
        </Layout>
    </div>
  )
}

export default App