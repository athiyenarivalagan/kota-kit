import { useEffect, useState } from "react"
import axios from "axios"
import { Empty } from "antd"
import '../../../index.css'

const Documents = () => {
    const [spatialLayouts, setSpatialLayouts] = useState([])
    const [needsPolling, setNeedsPolling] = useState(false)

    useEffect(() => {
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
        const unsignedDocuments = spatialLayouts.filter(item => item.isSigned === false)
        const envelopeIds = unsignedDocuments.map(item => item.envelopeId)
        const dataForSending = {
            envelopeIds: envelopeIds
        }
        axios.post('http://localhost:3001/api/spatialLayouts/checkEnvelopeStatus', dataForSending)
            .then(res => console.log(res.data))
            .then(setNeedsPolling(false))
    }, [needsPolling, spatialLayouts])

    if(!spatialLayouts.length) {
        return(
            <>
                <hr></hr>
                <h1> Document Activities </h1>
                <Empty />
            </>
        )
    }

    return(
        
        <>{console.log(spatialLayouts)}
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