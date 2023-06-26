// import { Drawer, Button, Space, Col, Row, Avatar, Affix } from 'antd'
// import { useState } from 'react'
import { Col, Row, Affix } from 'antd'
import { HomeOutlined } from '@ant-design/icons'

import SearchInput from '../SearchInput'
import CreateProjectButton from '../CreateProjectButton'
// import Notifications from '../Notifications'
// import Messages from '../Messages'

const AppHeader = ({ defaultValue }) => {
    // const[visible, setVisible] = useState(false)

    return (
        <Affix>
            <div className='flex bg-white p-4 border-b border-black'>
                <div className='flex w-64 justify-center items-center'>
                    <HomeOutlined />
                    <div><a href='/' className='logo'>KOTAKIT</a></div>
                </div>
                <div className='flex items-center mx-16 gap-24'>
                    <SearchInput defaultValue={defaultValue} />
                    <CreateProjectButton />
                </div>
                    
            </div>
        </Affix>
    )
}

export default AppHeader