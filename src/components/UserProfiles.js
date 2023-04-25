import { AntDesignOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Tooltip } from 'antd'

const UserProfiles = () => {

    return (
        <div>
            <Avatar.Group>
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
            <a href="https://ant.design">
                <Avatar
                style={{
                    backgroundColor: '#f56a00',
                }}
                >
                K
                </Avatar>
            </a>
            <Tooltip title="Ant User" placement="top">
                <Avatar
                style={{
                    backgroundColor: '#87d068',
                }}
                icon={<UserOutlined />}
                />
            </Tooltip>
            <Avatar
                style={{
                backgroundColor: '#1890ff',
                }}
                icon={<AntDesignOutlined />}
            />
            </Avatar.Group>
        </div>
    )
}

export default UserProfiles