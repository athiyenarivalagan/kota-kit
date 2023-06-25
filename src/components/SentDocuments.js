import { useEffect, useState } from "react"
import axios from "axios"
import { Row, Col, Empty, Spin } from "antd"
import '../index.css'
import { spatialLayoutDummyData } from "../data/dummyData"
import { checkDocusignStatus } from "../services/docusign"
import { updateDbToSigned } from "../services/docusign"
import DropdownMenu from './DropdownMenu'


const SentDocuments = ({ documents, loading, backendRouteCategory, newDocument}) => {

    if (!documents.length && !newDocument) {
        return(
            <>
                <hr />
                <Row justify="center" align="middle">
                    <Col>
                        <h3>Document Activities</h3>
                    </Col>
                </Row>
                <Empty />
            </>
        )
    }

    return(
        <>
            <Row justify="center" align="middle">
                <Col>
                    <h3>Document Activities</h3>
                </Col>
            </Row>

            <hr />
            
            {/* Documents Header */}
            <Row justify="center" align="middle">
                <Col span={7}>
                    <h5 style={{ textAlign: 'center' }}>Last Modified</h5>
                </Col>
                <Col span={7} offset={1}>
                    <h5 style={{ textAlign: 'center' }}>Date</h5>
                </Col>
                <Col span={7}>
                    <h5 style={{ textAlign: 'center' }}>Status</h5>
                </Col>
                <Col span={1}>
                    <h5 style={{ textAlign: 'center' }}></h5>
                </Col>
            </Row>

            {/* Document Rows */}
            {loading ? <Spin /> :
                (<>
                    {newDocument 
                    ? <DocumentRow 
                        name={(<a href={newDocument.file.url}>{newDocument.fileName}</a>)} 
                        date={(newDocument.isSent ? newDocument.dateSent.slice(0,10) : <Spin />)}
                        sentStatus={(newDocument.isSent ? "DOCUMENT SENT" : <Spin />)}
                        isSigned={newDocument.isSigned}
                     />
                    : null}

                    {documents.map(document =>{
                        const name = (<a href={document.file.url}>{document.fileName}</a>)
                        const date = (document.dateSent.slice(0,10))
                        const sentStatus = (document.isNew ? "NOT SENT YET"
                                            : document.isSigned ? "SIGNED" 
                                            : <Signed document={document} backendRouteCategory={backendRouteCategory} />)
                        return (
                            <DocumentRow name={name} date={date} sentStatus={sentStatus} isSigned={document.isSigned}/>
                        )
                    })}
                </>)
            }
        </>
    )
}

export default SentDocuments

const DocumentRow = ({ name, date, sentStatus, isSigned }) => {
    return (
        <div style={{ 
            border: '1px solid #ccc',
            padding: '16px',
            marginBottom: '16px',
        }}>
            <Row justify="center" align="middle">
                <Col span={7} style={{ textAlign: 'center' }}>
                    {name}
                </Col>
                <Col span={7} offset={1} style={{ textAlign: 'center' }}>
                    {date}
                </Col>
                <Col span={7}
                    style={{
                        textAlign: 'center',
                        color: isSigned ? 'green' : 'black'
                    }}>
                        {sentStatus}
                </Col>
                <Col span={1}>
                    <DropdownMenu />
                </Col>
            </Row>
        </div>
    )
}

const Signed = ({ document, backendRouteCategory }) => {
    
    const {signedStatus, loading} = useCheckDocusignStatus(document)

    // If it's not signed, then it'll always do a check against Docusign. 
    if (loading) {
        return <Spin />
    }
    console.log("State of signedStatus", signedStatus)
    if (signedStatus) {
        //Update DB if signed 
        console.log("code inside signedStatus is ran")
        updateDbToSigned(backendRouteCategory, document.id)
        return "SIGNED" 
    } else {
        return "DOCUMENT SENT"
    }

}

const useCheckDocusignStatus = (document) => {

    const [loading, setLoading] = useState(false)
    const [signedStatus, setSignedStatus] = useState(document.isSigned)
    useEffect(() => {
        setLoading(true)
        if (document.isSigned) return 

        checkDocusignStatus(document.envelopeId)
            .then(res => {
                if (res === true) {
                    setSignedStatus(res)
                } 
                setLoading(false)
            })
    }, [document])

    return {
        signedStatus,
        loading
    }
}