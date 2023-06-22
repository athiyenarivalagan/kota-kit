import { useState } from 'react'
import { Button, Modal} from 'antd'
import '../index.css'
import NewProjectForm from './NewProjectForm'
import { Form } from 'antd'

const CreateProjectButton = () => {
    const [modalToOpen, setmodalToOpen] = useState(false)
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
      console.log(values)
    }
    
    const handleCancel = () => {
      setmodalToOpen(false)
      form.resetFields()
    };

    return (
        <div>
            <Button type="primary" onClick={() => setmodalToOpen(true)}>
                + create a new project
            </Button>
            <Modal
                title="Create a new project"
                centered
                open={modalToOpen}
                onOk={form.submit}
                onCancel={handleCancel}
            >
              <NewProjectForm form={form} handleSubmit={handleSubmit}/>
            </Modal>
        </div>
    )
}

export default CreateProjectButton

