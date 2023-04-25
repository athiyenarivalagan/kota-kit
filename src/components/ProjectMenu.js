import { Menu } from 'antd'

const ProjectMenu = ({ projects, changeSelectedkey, selectedKeys }) => {
  const styledProjects = projects.map((project) => (
    <Menu.Item key={project.id} onClick={changeSelectedkey}>
        {project.id}
    </Menu.Item>
))

    return (
        <Menu mode="inline" selectedKeys={[selectedKeys]}>
            {styledProjects}
        </Menu>
    )
}

export default ProjectMenu