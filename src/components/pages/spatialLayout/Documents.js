import { useEffect, useState } from "react"
import axios from "axios"
import { Row, Col, Empty } from 'antd'
import '../../../index.css'
import FetchedDocuments from "./FetchedDocuments"


const Documents = () => {
    const [spatialLayouts, setSpatialLayouts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/spatialLayouts')
            .then(res => {
                console.log(res.data)
                setSpatialLayouts(res.data)
            })
    }, [])

    if (!spatialLayouts.length) {
        return(
            <>
                <Row justify="center" align="middle">
                    <Col>
                        <h3>Document Activities</h3>
                    </Col>
                </Row>

                <hr />
                
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
                <Empty />    
            </>
        )
    }

    return(
        <>
        <hr></hr>
            <h1> Document Activities </h1>
            <FetchedDocuments 
                spatialLayouts={spatialLayouts} 
                setSpatialLayouts={setSpatialLayouts}
            />
        </>
    )
}

export default Documents

