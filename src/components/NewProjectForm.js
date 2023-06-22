import { Form, Input, DatePicker, Select, Button } from "antd"

const NewProjectForm = ({ form, handleSubmit }) => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

    return (
      <Form
        form={form}
        name='newProject'
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
          marginTop: 24
        }}
        onFinish={handleSubmit}
      >
        <Form.Item 
          label="Client Name"
          name="clientName"
        >
            <Input />
        </Form.Item>

        <Form.Item 
          label="Client Email"
          name="clientEmail"
        >
            <Input />
        </Form.Item>

        <Form.Item 
          label="Address"
          name="address"
        >
            <Input />
        </Form.Item>

        <Form.Item 
          label="Start Date"
          name="startDate"
        >
            <DatePicker />
        </Form.Item>

        <Form.Item 
          label="House Type"
          name="houseType"
        >
            <Select 
              options={houseTypeOptions}
            />
        </Form.Item>
    </Form>
    )
  }

  export default NewProjectForm

  const houseTypeOptions = [
    {
      value: 'hdb',
      label: 'HDB',
    },
    {
      value: 'condo',
      label: 'Condo',
    },
    {
      value: 'landed',
      label: 'Landed',
    },
    {
      value: 'others',
      label: 'Others',
    }
  ]