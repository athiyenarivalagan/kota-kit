// import { Drawer, Button, Menu, Col, Row, Space } from 'antd'
import { Drawer, Button, Menu} from 'antd'
import { MenuOutlined, MailOutlined, AppstoreOutlined } from '@ant-design/icons'
import { useState } from 'react'

import SearchInput from '../SearchInput'

const AppHeader = ({ menu }) => {
    const[visible, setVisible] = useState(false)
    const items = [
        {
          label: 'Navigation One',
          key: 'mail',
          icon: <MailOutlined />,
        },
        {
          label: 'Navigation Two',
          key: 'app',
          icon: <AppstoreOutlined />,
          disabled: true,
        }
    ]

    return (
        <nav className="navbar">
            <Button 
            className="menu"
            type="primary"
            icon={<MenuOutlined />}
            onClick={ () => setVisible(true) }
            />
            <Drawer>
            title= "Projects"
            placement="left"
            onClick={ () => setVisible(false) }
            onClose={ () => setVisible(false) }
            visible={visible}
                {menu}
            </Drawer>
            {/* <i class="fa-solid fa-house"></i> */}
            <a href='/' className='logo'>KOTAKIT</a>
            {/* <SearchInput /> */}
            {/* <Menu mode="horizontal" items={items} /> */}

        </nav>
    )
}

export default AppHeader

// {/* <Row
// gutter={{
//     xs: 8,
//     sm: 16,
//     md: 24,
//     lg: 32,
// }}
// >
//     <Col className="gutter-row" span={6}>
//             <a href='/'>KOTAKIT</a>
//     </Col>
//     <Col className="gutter-row" span={18}>
//         <Menu mode="horizontal" style={{ display: 'flex', alignItems: 'right' }}>
//             <SearchInput />
//             <Menu.Item key="create">Create Form</Menu.Item>
//         </Menu>
//     </Col>
//     {/* <Col className="gutter-row" span={6}>
//         <div></div>
//     </Col> */}
// </Row> */}