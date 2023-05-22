import { Breadcrumb, Steps, Space, Button, message, Upload } from 'antd'
import { CheckCircleTwoTone, UploadOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useLoaderData } from "react-router-dom"


const SpatialLayout = () => {
    return (
        <>
            <Breadcrumb
                items={[
                    {
                        title: <a href="http://localhost:3000/project/">Spatial Planning</a>,
                    },
                    {
                        title: 'Spatial Layout',
                    },
                ]}
            />

            <Steps
                progressDot
                current={1}
                items={[
                    {
                    title: 'In Progress',
                    description: 'Be sure to use these guideline when planning your space & don’t forget to review proposal before sending to your clients.',
                    },
                    {
                    title: 'Sent for Signing',
                    description: 'Be sure to obtain signatureon final draft before proceeding with the next steps.',
                    },
                    {
                    title: 'Spatial Proposal Confirmed',
                    description: 'View your signed documents here.',
                    },
                ]}
            />

            <Space>
                <CheckCircleTwoTone />
                <h3>Guidelines & Checklist</h3>
            </Space>
            <p>Things to take note of when planning for spatial planning:</p>
            <ol>
                <li>
                    <strong>Structural Beams:</strong> The original floorplan from HDB / management would usually indicate which walls are structural.
                    When these structural beams have been identified, you should avoid hacking or tempering these walls.
                    Your design proposals should then accommodate to these areas accordingly.
                </li>
                <li>
                    <strong>Ergonomics of Interior:</strong> In order to create good spatial layout, you need to have a good sense of this.
                    At its core, ergonomics simply means the study of how a human being interacts with something else.
                    For interior designers, this means how a human being interacts with their surroundings, spatially.
                    For example, a minimum of 60 to 70cm is usually catered for all walkways:
                    ie spaces between your kitchen and island, on the left and right side of the bed.
                    When planning for spatial layout, we see the overview of the house from birds view.
                    When looking at this angle, we would be able to plan for how we want to positions our TV console, sofa or even bed.
                    Here are some guidelines you can use to help you make better decisions.
                </li>
                <ul>
                    <li>#1. For start, you can use the Standard Furniture Sizes to base all your furniture and appliances at this planning stage until you or your client have confirmed on the specific models and types. 
                        <a href="https://www.thespruce.com/standard-furniture-measurements-1391374">[source]</a>
                    </li>
                    <li>
                        <strong>Custom Made Furnitures: Depths:</strong> When you or your clients are intending to custom make any furnitures, while the total lengths of how much kitchen you'd want fill throughout the kitchen, it is the opposite for its depth. There are a couple of standard custom depth sizes that have already been set by the common industry contractors based on common ergonomics. Below are some examples:
                        <ul>
                            <li>In the Kitchen: Bottom Cabinet: 60cmD, Top Cabinet: 30cmD, Kitchen Peninsula: 60cmD</li>
                            <li>In the Bathroom: Mirror Vanity Cabinet: 25cm, Sink Cabinet: 40-50cmD</li>
                            <li>Unique Custom Carpentries: Kitchen Islands: 60cmD to 2mD, Study Tables: 60cmD to 1m</li>
                        </ul>
                    </li>
                </ul>
                <li>
                    <strong>Tips:</strong> When planning the spatial layout, put yourself in the user's shoes. Imagine how would you use the space? A good reference is also to go back to users existing / current spatial ergonomics. Question how effective they are or if there are rooms for more improvements. Question what do they dislike or love most about that arrangement. Would you want to reuse the same layout? Remember that your previous experience can be of great reference for a more conducive environment in your new home.
                </li>
                <li>
                    With a drawn-to-scale HDB floorplan, you will be able to start planning how your spatial layout is going to be. To do so, draw the furn
                </li>
            </ol>
            <UploadFiles />
        </>
    )
}

export default SpatialLayout

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

const SentFiles = ( {sentFiles} ) => {
    if (!sentFiles.length) {
        return null
    }
    return(
        <>
            <div>Files sent:</div>
            {sentFiles.map(item => {
                return(
                    <div><a href={item.file.url}>{item.name}</a> | Date sent: {item.dateUploaded.slice(0,10)}</div>
                    
                )
            })}
        </>
    )
}