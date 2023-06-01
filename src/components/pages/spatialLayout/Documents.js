import { useEffect, useState } from "react"
import axios from "axios"
import { Empty } from "antd"
import '../../../index.css'
import { updateSentStatus } from "./Documents_helper"
import { Spin } from "antd"

const Documents = () => {
    const [spatialLayouts, setSpatialLayouts] = useState([])
    const [needsPolling, setNeedsPolling] = useState(false)
    const [isCheckingStatus, setIsCheckingStatus] = useState(false)

    useEffect(() => {
        console.log("THis is reached in the first useEffect")
        console.log("State of spatialLayouts:", spatialLayouts)
        axios.get('http://localhost:3001/api/spatialLayouts')
            .then(res => {
                setSpatialLayouts(res.data)
                // If any item in data has isSigned = false, then we shall set needsPolling = true
                const unsignedDocuments = res.data.filter(item => item.isSigned === false)
                if (unsignedDocuments.length) {
                    setNeedsPolling(true)
                }
            })
    }, [])

    useEffect(() => {
        if (!needsPolling) {
            return 
        }
        console.log("THis is reached in the 2nd useEffect")
        console.log("State of spatialLayouts:", spatialLayouts)
        setIsCheckingStatus(true)
        const unsignedDocuments = spatialLayouts.filter(item => item.isSigned === false)
        const envelopeIds = unsignedDocuments.map(item => item.envelopeId)
        const dataForSending = {
            envelopeIds: envelopeIds
        }
        axios.post('http://localhost:3001/api/spatialLayouts/checkEnvelopeStatus', dataForSending)
            .then(res => setSpatialLayouts(updateSentStatus(spatialLayouts,res.data.envelopes)))
            .then(setNeedsPolling(false))
            .then(setIsCheckingStatus(false))
    }, [needsPolling, spatialLayouts])

    if (!spatialLayouts.length) {
        return(
            <>
                <hr></hr>
                <h1> Document Activities </h1>
                <Empty />
            </>
        )
    }

    if (isCheckingStatus) {
        return(
            <> {console.log("THis is reached in the isCheckingStatus; state of spatialLayouts:", spatialLayouts)}
                <hr></hr>
                    <h1> Document Activities </h1>
                    {spatialLayouts.map(item =>{
                        return(
                            <div className="documentRow">
                                <div><a href={item.file.url}>{item.fileName}</a></div>
                                <div>{item.dateSent.slice(0,10)}</div>
                                <div>{item.isSigned ? "SIGNED": <Spin />}</div>
                            </div>
                        )
                    })}
            </>
        )
    }

    return(
        <>{console.log("THis is reached in the main return; state of spatialLayouts:", spatialLayouts)}
        <hr></hr>
            <h1> Document Activities </h1>
            {spatialLayouts.map(item =>{
                return(
                    <div className="documentRow">
                        <div><a href={item.file.url}>{item.fileName}</a></div>
                        <div>{item.dateSent.slice(0,10)}</div>
                        <div>{item.isSigned ? "SIGNED": "DOCUMENT SENT"}</div>
                    </div>
                )
            })}
        </>
    )
}

export default Documents

