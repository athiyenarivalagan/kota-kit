import { Layout, Space, Avatar } from "antd"
import { UserOutlined } from '@ant-design/icons'

import Notifications from "./Notifications"
// import UserImage from "./UserImage"
import Messages from "./Messages"

const SideBar = ({ menu }) => {

    return (
      <div>
        <Layout.Sider
        // width={200} // default width
        className="sidebar"
        breakpoint={"lg"}
        theme="light"
        // theme={{
        //   token: {
        //     colorPrimary: '#808080',
        //   }
        // }}
        collapsedWidth={0}
        trigger={null}
        >
          <Space direction="vertical" size="middle">
            {/* <UserImage /> */}
            <Avatar
              size={{
                  xs: 24,
                  sm: 32,
                  md: 40,
                  lg: 64,
                  xl: 80,
                  xxl: 100,
              }}
              icon={<UserOutlined />}
            />
            <p><u>Projects</u></p>
            {menu}
            <Notifications />
            <Messages />
          </Space>
        </Layout.Sider>
      </div>
    )
}

export default SideBar

