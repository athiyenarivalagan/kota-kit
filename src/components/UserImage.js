import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const UserImage = () => {
  return (
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
  )
}

export default UserImage