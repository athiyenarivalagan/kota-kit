import { useEffect, useState } from "react"
import axios from "axios"
import { updateSentStatus } from "./Documents_helper"
import '../../../index.css'
import { Spin } from "antd"

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
        axios.post('http://localhost:3001/api/spatialLayouts/checkEnvelopeStatus', dataForSending)
        .then(res => {
            setSpatialLayouts(updateSentStatus(spatialLayouts,res.data.envelopes))
            setIsLoading(false)
        })
    }, [])

    const documents = (elem) => (
        <>
            {spatialLayouts.map(item =>{
                return(
                    <div className="documentRow">
                        <div><a href={item.file.url}>{item.fileName}</a></div>
                        <div>{item.dateSent.slice(0,10)}</div>
                        <div>{item.isSigned ? "SIGNED": elem}</div>
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

