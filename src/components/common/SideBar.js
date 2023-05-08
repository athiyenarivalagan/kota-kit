import { Link } from "react-router-dom"
import { Layout, Space } from "antd"

import Notifications from "../Notifications"
import UserImage from "../UserImage"
import Messages from "../Messages"

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
          height: "100%"
        }}
      >
        <Space 
          direction="vertical" 
          size="middle"
          style={{ paddingTop: '20px' }}
        >
          <UserImage />
          <h1>Projects</h1>
          {projects.length ? (
                projects.map(project => (
                    <div key={project.id}>
                        <Link to={`/project/${project.id}`}>
                            {project.name ? (
                            <>
                              { project.name }
                            </>
                            ) : (
                            <i>Undefined Project</i>
                            )}{" "}
                        </Link>
                    </div>
                ))
            ) : (
            <p>
                <i>No projects</i>
            </p>
        )}
          <Notifications />
          <Messages />
        </Space>
      </Layout.Sider>
    )
}

export default SideBar

