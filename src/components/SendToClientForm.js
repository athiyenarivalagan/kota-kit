import { uploadToS3 } from "../services/s3"
import { newRecordInDb } from "../services/documents"
import { sendViaDocusign } from "../services/docusign"
import { useState } from 'react'
import { Upload, Space, Form, Input } from 'antd'
import { useLoaderData } from "react-router-dom"
import { FormOutlined } from '@ant-design/icons'
import CustomCheckCircleIcon from './CustomCheckCircleIcon'
import { props, initializeFormData, initialFormValue } from "./sendToClientForm_helper"
import { useAuth } from "../hooks/useAuth"

const SendToClientForm = ({ backendRouteCategory, setNewDocument, pageTitle}) => {

    const [form, setForm] = useState(initialFormValue)
    const auth = useAuth()
    const userEmail = auth.user.email
    const userName = auth.user.name

    const project = useLoaderData()
    const uploadProps = props(form, setForm)

    const handleFormChange = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
     
    // This is a very long submit handler which carries out an effects chain. 
    const handleSubmit = async (e) => {
        e.preventDefault()

        const answer = window.confirm("Confirm submitting this to client?")
        
        if (!answer) {
            console.log("Do nothing. ")
            return
        }

        const formData = initializeFormData(form.file.name, project.id, form.file)
        
        try {
            // Uploads to S3
            const res = await uploadToS3(formData)

            if (!res.data.success) {
                alert("Error in uploading to S3")
                return
            }

            const tempRecord = {
                file: {
                    url: res.data.file,
                    contentType: res.data.contentType
                },
                fileName: res.data.name,
                isSent: false,
                isSigned: false,
                isNew: true
            }

            // Set page state upon success
            setNewDocument(tempRecord)
            setForm(initialFormValue)

            // Trigger docusign email
            const docusignRes = await sendViaDocusign({
                ...res.data,
                signerEmail: form.emailAddress,
                signerName: form.clientName,
                ccEmail: userEmail,
                ccName: userName
            })

            if (docusignRes.status !== 200) {
                alert("Error in sending via Docusign")
                return
            }

            // If successful, uploads to Db and sets page state 
            if (docusignRes.data.status === 'sent') {
                const recordData = {
                    fileName: res.data.name,
                    file: {
                        url: res.data.file,
                        contentType: res.data.contentType,
                    },
                    isSent: true,
                    dateSent: docusignRes.data.sentTime,
                    envelopeId: docusignRes.data.envelopeId,
                    isSigned: false
                }
                const newDbRecordRes = await newRecordInDb(backendRouteCategory, recordData)
                setNewDocument(newDbRecordRes.data)
            }
        } catch (err) {
            console.log(err)
        }
    }

    
    return (
        <>
            <Space>
                <CustomCheckCircleIcon />
                <h2>Upload And Send {pageTitle} For Signing</h2>
            </Space>

            <div style={{ border: '1px solid #ccc', padding: '32px' }}>
                <h3 className="text-lg">Send new document:</h3>
                    <div className="flex justify-between">
                        <p className="my-2">Attach new file and details below:</p>
                        <Upload {...uploadProps} className="w-48">
                            <FormOutlined className="text-2xl"/>
                        </Upload>
                    </div>
                    
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
                        <Button submit text="Send document via Docusign" onClick={handleSubmit}/>
                    </Form.Item>
                </Form>

            </div>
        </>
    )
}

export default SendToClientForm

const Button = ({ text, submit, onClick}) => <button className="py-2 px-5 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type={submit ? 'submit' : ''} onClick={onClick}>{text}</button>