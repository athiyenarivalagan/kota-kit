import { useState } from 'react'
import { Button, Upload } from 'antd'
import SentFiles from './SentFiles'
import { useLoaderData } from "react-router-dom"
import { UploadOutlined } from '@ant-design/icons'

const UploadFiles = () => {

    const [sentFiles, setSentFiles] = useState([])
    const [form, setForm] = useState({
        clientName: '', 
        emailAddress:'', 
        file: new Blob()
    })

    const project = useLoaderData()

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
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const answer = window.confirm("Confirm submitting this to client?")
        const formData = new FormData()
        formData.append("name", form.file.name)
        formData.append("projectId", project.id)
        formData.append("file", form.file)
        formData.append("dateUploaded", new Date())
        for (var key of formData.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }

        if (answer) {
            fetch('http://localhost:3001/api/spatialLayouts', {
                method: 'POST', 
                body: formData
            })
            .then((res) => res.json())
            .then(res => {
                console.log("This is reached from within fetch then")
                setSentFiles([
                    ...sentFiles,
                    res
                ])
            })
            .catch(err => err.message)
        }
        else {
            console.log("Do nothing. ")
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
            <div style={{fontSize:"3em"}}> ✅ Upload and send spatial layout for signing </div>
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
            <SentFiles sentFiles={sentFiles} />
        </>
    )
}

export default UploadFiles