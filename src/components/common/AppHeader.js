// import { Col, Row, Affix } from 'antd'
import { Affix } from 'antd'

import SearchInput from '../SearchInput'
import CreateProjectButton from '../CreateProjectButton'
// import Notifications from '../Notifications'
// import Messages from '../Messages'
import { useAuth } from '../../hooks/useAuth'

const AppHeader = () => {
    let auth = useAuth();
    return (
        <Affix>
            <div className='flex bg-white p-4 border-b border-black'>
                <div className='flex w-64 justify-center items-center'>
                    <div><a href='/' className='text-3xl'>KOTAKIT</a></div>
                </div>
                <div className='flex items-center mx-16 gap-24'>
                    <SearchInput />
                    <CreateProjectButton />
                    <button
                        onClick={() => {
                        auth.logout();
                        }}
                    >
                        Sign out
                    </button>
                </div>
            </div>
        </Affix>
    )
}

export default AppHeader