import { useState } from 'react'
import { Button, Form, Input, Modal} from 'antd'

const CreateForm = () => {
    // const [size, setSize] = useState('large') // default is 'middle'
    const [modal2Open, setModal2Open] = useState(false)

    return (
        <div>
            <Button type="primary" onClick={() => setModal2Open(true)}>
                + create a new project
            </Button>
            <Modal
                title="Create a new project"
                centered
                open={modal2Open}
                onOk={() => setModal2Open(false)}
                onCancel={() => setModal2Open(false)}
            >
                <p>insert form here...</p>
            </Modal>
        </div>
    )
}

export default CreateForm