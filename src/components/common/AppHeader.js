import { Drawer, Button, Space, Col, Row, Avatar, Affix } from 'antd'
import { MenuOutlined, UserOutlined } from '@ant-design/icons'
import { useState } from 'react'

import SearchInput from '../SearchInput'
import CreateForm from '../CreateForm'
import Notifications from '../Notifications'
import Messages from '../Messages'


const AppHeader = ({ menu }) => {
    const[visible, setVisible] = useState(false)

    return (
        <Affix>
            <header className="container">
                
                <Drawer 
                className="drawer"
                title="Projects"
                width={240}
                placement="left"
                onClick={ () => setVisible(false) }
                onClose={ () => setVisible(false) }
                open={visible}
                >
                    <Space direction="vertical" align="center">
                        <Avatar size={64} icon={<UserOutlined />} />
                        {menu}
                        <Notifications />
                        <Messages />
                    </Space>
                </Drawer>
            
                <Row 
                justify="space-between"
                align="middle"
                style={{ maxWidth: "1400px", margin: "0 auto" }}
                >
                    <Col xs={2} sm={2} md={0} lg={0} xl={0} style={{padding: 0}}>
                        <Button 
                            className="menu"
                            type="primary"
                            icon={<MenuOutlined />}
                            onClick={ () => setVisible(true) }
                        />
                    </Col>
                    <Col xs={16} sm={4} md={6} lg={6} xl={6} style={{padding: 0}}>
                        <i className="fa-solid fa-house"></i>
                        <a href='/' className='logo'>
                            KOTAKIT
                        </a>
                    </Col>
                    <Col xs={4} sm={4} md={6} lg={8} xl={10} style={{padding: 0}}>
                        <SearchInput className="search-input"/>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4} xl={4} style={{padding: 0}}>
                        <CreateForm />
                    </Col>
                </Row>
            </header>
        </Affix>
    )
}

export default AppHeader