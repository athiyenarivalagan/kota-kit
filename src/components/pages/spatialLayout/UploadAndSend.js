import { useState } from 'react'
import { Button, Upload, Space } from 'antd'
import SentFile from './SentFile'
import { useLoaderData } from "react-router-dom"
import { UploadOutlined, CheckCircleTwoTone } from '@ant-design/icons'
import axios from 'axios'

const CustomCheckCircleIcon = () => (
    <CheckCircleTwoTone style={{ fontSize: '28px' }} />
)

const UploadAndSend = () => {

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
            const res = await axios.post('http://localhost:3001/api/spatialLayouts/uploadToS3', formData)
            if (res.data.success === true) {
                setSentFile({
                    name: res.data.name,
                    file: res.data.file,
                    isSent: false
                })
                const dataToSend = {
                    ...res.data,
                    signerEmail: form.emailAddress,
                    signerName: form.clientName,
                    ccEmail: 'leibingguo@gmail.com',
                    ccName: 'Leibing'
                }
                try {
                    const docusignRes = await axios.post('http://localhost:3001/api/spatialLayouts/sendViaDocusign', dataToSend)
                    setSentFile({
                        name: res.data.name,
                        file: res.data.file,
                        isSent: true,
                        dateSent: docusignRes.data.dateSent
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

    return(
        <>
            <Space>
                {/* <CheckCircleTwoTone /> */}
                <CustomCheckCircleIcon />
                <h2>Upload and send spatial layout for signing</h2>
            </Space>
            {/* <div style={{fontSize:"3em"}}> ✅ Upload and send spatial layout for signing </div> */}
            <div>Send new document:</div>
            <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>

            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label htmlFor="clientName">Client's name: </label>
                <input type="text" name="clientName" value={form.clientName} onChange={handleFormChange}/>
                <label htmlFor="emailAddress">Email address: </label>
                <input type="text" name="emailAddress" value={form.emailAddress} onChange={handleFormChange}/>
                <button type="submit">Send document via Docusign</button>
            </form>
            <SentFile file={sentFile}/>
        </>
    )
}

export default UploadAndSend