import { Drawer, Button, Space, Col, Row, Avatar } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { useState } from 'react'

import SearchInput from '../SearchInput'
import CreateForm from '../CreateForm'
// import UserImage from '../UserImage'
import Notifications from '../Notifications'
import Messages from '../Messages'
import { UserOutlined } from '@ant-design/icons'


const AppHeader = ({ menu }) => {
    const[visible, setVisible] = useState(false)

    return (
        <div>
            <header className="container">

                <Drawer 
                className="drawer"
                title="Projects"
                // reduce size of drawer
                placement="left"
                onClick={ () => setVisible(false) }
                onClose={ () => setVisible(false) }
                visible={visible}
                // open={visible}
                >
                    <Space direction="vertical">
                        {/* <UserImage /> */}
                        <Avatar
                            size={64}
                            icon={<UserOutlined />}
                        />
                        {menu}
                        <Notifications />
                        <Messages />
                    </Space>
                </Drawer>
            
                <Row>
                    <Col xs={2} sm={2} md={0} lg={0} xl={0}>
                        <Button 
                            className="menu"
                            type="primary"
                            icon={<MenuOutlined />}
                            onClick={ () => setVisible(true) }
                            />
                    </Col>
                    <Col xs={16} sm={4} md={6} lg={6} xl={6}>
                        <i class="fa-solid fa-house"></i>
                        <a href='/' className='logo'>KOTAKIT</a>
                    </Col>
                    <Col xs={4} sm={4} md={6} lg={8} xl={10}>
                        <SearchInput class="search-input"/>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                        <CreateForm />
                    </Col>
                </Row>
                
            </header>
        </div>
    )
}

export default AppHeader