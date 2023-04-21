import { Layout } from "antd"

const Content = ({ projects }) => {

    return (
      <div>
        <Layout.Content>
          {projects.map(project => (
              <div key={project.id}>
                <p>{project.id}</p>
                <p>{project.details}</p>
                <p>{project.address}</p>
              </div>
          ))}
        </Layout.Content>
      </div>
    )
}

export default Content