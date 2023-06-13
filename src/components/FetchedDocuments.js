import { useEffect, useState } from "react"
import axios from "axios"
import { updateSentStatus } from "./pages/spatialLayout/Documents_helper"
import '../index.css'
import { Row, Col, Spin } from "antd"
import { docuSignEnvelopes } from "../data/dummyData"
import DropdownMenu from './DropdownMenu'

const FetchedDocuments = ({ spatialLayouts, setSpatialLayouts }) => {

    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        const unsignedDocuments = spatialLayouts.filter(item => item.isSigned === false)
        if(!unsignedDocuments.length) {
            return
        } 
        const envelopeIds = unsignedDocuments.map(item => item.envelopeId)
        const dataForSending = {
            envelopeIds: envelopeIds
        }
        setIsLoading(true)
        setSpatialLayouts(updateSentStatus(spatialLayouts,docuSignEnvelopes))
        setIsLoading(false)
    }, [])

    const documents = (elem) => (
        
        <>
            {spatialLayouts.map(item =>{
                return (

                    <div style={{ 
                        border: '1px solid #ccc',
                        padding: '16px',
                        marginBottom: '16px',
                        // display: 'flex',
                     }}>
                        <Row justify="center" align="middle">
                            <Col span={7} style={{ textAlign: 'center' }}>
                                <a href={item.file.url}>{item.fileName}</a>
                            </Col>
                            <Col span={7} offset={1} style={{ textAlign: 'center' }}>
                                {item.dateSent.slice(0,10)}
                            </Col>
                            <Col 
                                span={7}
                                offset={1}
                                style={{
                                    textAlign: 'center',
                                    color: item.isSigned ? 'green' : 'black'
                                }}>
                                    {item.isSigned ? "SIGNED": elem}
                            </Col>
                            <Col span={1}>
                                <DropdownMenu />
                            </Col>
                        </Row>
                    </div>
                )
            })}
        </>
    )

    if (isLoading) {
        return documents(<Spin />)
    }

    return documents('DOCUMENT SENT')
}

export default FetchedDocuments

