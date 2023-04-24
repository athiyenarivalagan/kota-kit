import { Layout } from "antd"
import ProgressBar from './ProgressBar'

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
          <ProgressBar />
        </Layout.Content>
      </div>
    )
}

export default Content