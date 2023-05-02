import { Input, Form, Button , Row, Col } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
}

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 11,
      offset: 13,
    },
    md: {
      span: 8, // Increase the span
      offset: 0, // Remove the offset to align the button to the left
    },
  },
};

const TextInput = () => {
    const [form] = Form.useForm()
    const onFinish = (values) => {
      console.log('Received values of form: ', values)
    }

  return (
    <div>
      <div style={{
        marginTop: 24,
        justifyContent: "center", 
        alignItems: "center", 
        flexDirection: "column"
      }}>
        <Row>
          <Col span={8} offset={2}
          >
            <p>55 comments</p>
          </Col>
          <Col span={8} offset={4}>
            Sort by <MenuOutlined />
          </Col>
        </Row>
      </div>
      
      <div style={{
          //  display: "flex",
          justifyContent: "center", 
          alignItems: "center", 
          flexDirection: "column"
        }}>
        
        <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        style={{ maxWidth: 1000, margin: "0 auto" }}
        scrollToFirstError
      >
          <Form.Item>
            <Input.TextArea
              showCount maxLength={100}
              style={{ height: 120, marginTop: 24 }}
              placeholder="provide your feedback"
            />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Add a comment
            </Button>
          </Form.Item>
        </Form>
      </div> 
    </div>
  )
}

export default TextInput
  