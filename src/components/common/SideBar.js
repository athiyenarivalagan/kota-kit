import { NavLink } from "react-router-dom"
import { Layout } from "antd"

import UserImage from "../UserImage"
// import Notifications from "../Notifications"
// import Messages from "../Messages"

const SideBar = ({ projects }) => {

    return (
      <Layout.Sider
        className="sidebar"
        breakpoint={"lg"}
        theme="light"
        collapsedWidth={0}
        trigger={null}
        width={240}
        style={{
          position: "fixed",
          height: "100%",
          paddingTop: '20px'
        }}
      >
        <UserImage />
        <h1>Projects</h1>
        <nav>
          {projects.length ? (
            <ul>
              {projects.map(project => (
                <li key={project.id}>
                  <NavLink
                    to={`/project/${project.id}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    {project.name ? (
                    <>
                      { project.name }
                    </>
                    ) : (
                    <i>Undefined Project</i>
                    )}{" "}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
                <i>No projects</i>
            </p>
        )}
        {/* <Notifications /> */}
        {/* <Messages /> */}
      </nav>
    </Layout.Sider>
  )
}

export default SideBar

