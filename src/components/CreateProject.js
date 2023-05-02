import { useState } from 'react'
import { Button, Form, Input, Modal} from 'antd'

const CreateProject = () => {
    const [modal2Open, setModal2Open] = useState(false)
    
    const [form] = Form.useForm()
    const [formLayout, setFormLayout] = useState('horizontal')
    const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  }
    const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 7,
          },
          wrapperCol: {
            span: 15,
          },
        }
      : null;
    

    return (
        <div>
            <Button type="primary" onClick={() => setModal2Open(true)}>
                + create a new project
            </Button>
            <Modal
                title="Create a new project"
                centered
                open={modal2Open}
                okText='Submit'
                cancelText='Cancel'
                onOk={() => setModal2Open(false)}
                onCancel={() => setModal2Open(false)}
            >
                <Form
                   {...formItemLayout}
                   layout={formLayout}
                   form={form}
                   initialValues={{
                     layout: formLayout,
                   }}
                   onValuesChange={onFormLayoutChange}
                   style={{
                     maxWidth: 600,
                     marginTop: 24
                   }}
                >
                    <Form.Item label="Postal Code">
                        <Input placeholder="e.g 730317" />
                    </Form.Item>

                    <Form.Item
                    label="Block/Street Name">
                        <Input placeholder="e.g 220 Pasir Ris Drive 50" />
                    </Form.Item>

                    <Form.Item
                    label="Building/House No">
                        <Input />
                    </Form.Item>

                    <Form.Item
                    label="Unit Number">
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default CreateProject