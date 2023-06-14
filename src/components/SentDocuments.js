import { useEffect, useState } from "react"
import axios from "axios"
import { Row, Col, Empty, Spin } from "antd"
import '../index.css'
import FetchedDocuments from "./FetchedDocuments"
import { spatialLayoutDummyData } from "../data/dummyData"
import { checkDocusignStatus } from "../services/docusign"
import { updateDbToSigned } from "../services/docusign"


const SentDocuments = ({ documents, loading, backendRouteCategory}) => {

    if (!documents.length) {
        return(
            <>
                <hr></hr>
                <h1> Document Activities </h1>
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
                <Col span={8}>
                    <h5 style={{ textAlign: 'center' }}>Last Modified</h5>
                </Col>
                <Col span={8}>
                    <h5 style={{ textAlign: 'center' }}>Date</h5>
                </Col>
                <Col span={8}>
                    <h5 style={{ textAlign: 'center' }}>Status</h5>
                </Col>
            </Row>

            {/* Document Rows */}
            {loading ? <Spin /> :
                (
                    documents.map(document =>{
                        return (
                            <div style={{ 
                                border: '1px solid #ccc',
                                padding: '16px',
                                marginBottom: '16px',
                            }}>
                                <Row justify="center" align="middle">
                                    <Col span={8} style={{ textAlign: 'center' }}>
                                        <a href={document.file.url}>{document.fileName}</a>
                                    </Col>
                                    <Col span={8} style={{ textAlign: 'center' }}>
                                        {document.dateSent.slice(0,10)}
                                    </Col>
                                    <Col span={8}
                                        style={{
                                            textAlign: 'center',
                                            color: document.isSigned ? 'green' : 'black'
                                        }}>
                                            {document.isSigned ? "SIGNED" : <Signed document={document} backendRouteCategory={backendRouteCategory} />}
                                    </Col>
                                </Row>
                            </div>
                        )
                    })
                )
            }
        </>
    )
}

export default SentDocuments

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
    }, [])

    return {
        signedStatus,
        loading
    }
}