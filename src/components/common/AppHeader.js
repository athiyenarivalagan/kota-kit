// import { Drawer, Button, Space, Col, Row, Avatar, Affix } from 'antd'
// import { MenuOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons'
// import { useState } from 'react'
import { Col, Row, Affix } from 'antd'
import { HomeOutlined } from '@ant-design/icons'

import SearchInput from '../SearchInput'
import CreateProject from '../CreateProject'
// import Notifications from '../Notifications'
// import Messages from '../Messages'

const AppHeader = ({ menu }) => {
    // const[visible, setVisible] = useState(false)

    return (
        <Affix>
            <header className="container">
                {/* refactor Drawer as a separate component */}
                {/* <Drawer 
                title="Projects"
                width={240}
                placement="left"
                onClick={ () => setVisible(false) }
                onClose={ () => setVisible(false) }
                open={visible}
                >
                    <Space 
                        direction="vertical"
                        align="center" 
                    >
                        <Avatar size={64} icon={<UserOutlined />} />
                        {menu}
                        <Notifications />
                        <Messages />
                    </Space>
                </Drawer> */}
            
                <Row 
                justify="space-between"
                align="middle"
                style={{ maxWidth: "1400px", margin: "0 auto" }}
                >
                    {/* <Col xs={2} sm={2} md={0} lg={0}>
                        <Button 
                            className="menu"
                            type="primary"
                            icon={<MenuOutlined />}
                            onClick={ () => setVisible(true) }
                        />
                    </Col> */}
                    <Col xs={4} sm={4} md={5} lg={4} style={{padding: 0}}>
                        <HomeOutlined />
                        <a href='/' className='logo'>
                        KOTAKIT
                        </a>
                    </Col>
                    <Col xs={18} sm={18} md={19} lg={20}>
                        <div style={{ display: 'flex' }}>
                        <div style={{ marginRight: '10px' }}>
                            <SearchInput />
                        </div>
                            <CreateProject />
                        </div>
                    </Col>
                </Row>
            </header>
        </Affix>
    )
}

export default AppHeader