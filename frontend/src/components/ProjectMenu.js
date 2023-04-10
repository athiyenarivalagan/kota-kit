import { Menu } from 'antd'

const ProjectMenu = ({ projects, changeSelectedkey, selectedKeys }) => {
    const styledProjects = []
    projects.forEach((project, id) => {
      styledProjects.push(
        <Menu.Item key={id} onClick={changeSelectedkey}>
            {project.id}
        </Menu.Item>
      )  
    })

    return (
        <Menu mode="inline" selectedKeys={[selectedKeys]}>
            {styledProjects}
        </Menu>
    )
}

export default ProjectMenu