import { useState } from 'react'
import { Button, Upload, Space, Form, Input } from 'antd'
import SentFile from './SentFile'
import { useLoaderData } from "react-router-dom"
import { UploadOutlined, UserOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons'
import CustomCheckCircleIcon from './CustomCheckCircleIcon'
import axios from 'axios'


const UploadAndSend = ({ name }) => {

    const [form, setForm] = useState({
        clientName: '', 
        emailAddress:'', 
        file: new Blob()
    })

    const [sentFile, setSentFile] = useState(null)

    const project = useLoaderData()

    // For Upload component: prevents the default auto-upload & sets form state. 
    const props = {
        name: 'file',
        headers: {
          authorization: 'authorization-text',
        },
        beforeUpload: (file) => {
            setForm({
                ...form,
                file
            })
            return false
        }
      };
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const answer = window.confirm("Confirm submitting this to client?")
        const formData = new FormData()

        formData.append("name", form.file.name)
        formData.append("projectId", project.id)
        formData.append("file", form.file)

        if (!answer) {
            console.log("Do nothing. ")
            return
        }
        
        try {
            // const res = await axios.post('http://localhost:3001/api/spatialLayouts/uploadToS3', formData)
            // if (res.data.success === true) {
            if (true) {
                setSentFile({
                    name: 'testName',
                    file: 'testfile',
                    isSent: false
                })
                // const dataToSend = {
                //     ...res.data,
                //     signerEmail: form.emailAddress,
                //     signerName: form.clientName,
                //     ccEmail: 'leibingguo@gmail.com',
                //     ccName: 'Leibing'
                // }
                try {
                    // const docusignRes = await axios.post('http://localhost:3001/api/spatialLayouts/sendViaDocusign', dataToSend)

                    setSentFile({
                        name: 'testname.pdf',
                        file: 's3.testname.pdf',
                        isSent: true,
                        dateSent: '5th May 2023'
                    })
                } catch (e) {
                    console.log(e)
                }
                
                
            }

        } catch (err) {
            console.log(err)
        }
    }

    const handleFormChange = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    return (
        <>
            <Space>
                <CustomCheckCircleIcon />
                <h2>Upload And Send {name} For Signing</h2>
            </Space>

            <div style={{ border: '1px solid #ccc', padding: '16px' }}>
                <h3>Send new document:</h3>
                <p>Attach new file and details below</p>
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>

                <hr 
                    style={{ 
                        border: 'none', 
                        borderTop: '2px solid #ccc', 
                        margin: '16px 0'
                     }} 
                /> 

                <Form 
                    onSubmit={handleSubmit}
                    layout='vertical'
                >
                    <Form.Item label="Enter client's name & email address" name="Client">
                        <Input
                            name="clientName"
                            placeholder="Client's Name"
                            // prefix={<UserOutlined />}
                            value={form.clientName}
                            onChange={handleFormChange}
                            style={{ 
                                display: 'inline-block',
                                width: 'calc(50% - 8px)',
                                marginRight: '8px',
                            }}
                        />

                        <Input
                            name="emailAddress"
                            placeholder='Email Address'
                            value={form.emailAddress}
                            onChange={handleFormChange}
                            style={{ 
                                display: 'inline-block',
                                width: 'calc(50% - 8px)',
                                marginLeft: '8px'
                            }}
                        />
                    </Form.Item>


                    <Form.Item style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                            Send document via Docusign
                        </Button>
                    </Form.Item>
                </Form>

                <SentFile file={sentFile}/>
            </div>
        </>
    )
}

export default UploadAndSend