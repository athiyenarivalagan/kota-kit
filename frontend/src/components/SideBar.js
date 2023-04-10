import { Layout } from "antd"

// const SideNavBar = () => {
//     return (
//         <Menu
//         mode="inline"
//         defaultSelectedKeys={['1']}
//         defaultOpenKeys={['sub1']}
//         style={{
//             height: '100%',
//             borderRight: 0,
//         }}
//         //   items={items2}
//         />
//     )
// }

// const SideBar = ({ menu }) => {
const SideBar = ({ menu }) => {
    return (
    <Layout.Sider
      className="sidebar"
      breakpoint={"lg"}
      theme="light"
      collapsedWidth={0}
      trigger={null}
    >
    {menu}
    </Layout.Sider>
    )
}

export default SideBar

