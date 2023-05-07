import { Layout, Space } from "antd"

import Notifications from "../Notifications"
import UserImage from "../UserImage"
import Messages from "../Messages"

const SideBar = ({ menu }) => {

    return (
      <Layout.Sider
        className="sidebar"
        breakpoint={"lg"}
        theme="light"
        collapsedWidth={0}
        trigger={null}
        width={240}
        style={{
          // position: "fixed",
          height: "100%"
        }}
      >
        <Space 
          direction="vertical" 
          size="middle"
          style={{ paddingTop: '20px', paddingBottom: '20px' }}
        >
          <UserImage />
          <p><u>Projects</u></p>
          {menu}
          <Notifications />
          <Messages />
        </Space>
      </Layout.Sider>
    )
}

export default SideBar

