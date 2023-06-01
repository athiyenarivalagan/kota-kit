import { useEffect, useState } from "react"
import axios from "axios"
import { Empty } from "antd"
import '../../../index.css'
import FetchedDocuments from "./FetchedDocuments"


const Documents = () => {
    const [spatialLayouts, setSpatialLayouts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/spatialLayouts')
            .then(res => {
                setSpatialLayouts(res.data)
            })
    }, [])

    if (!spatialLayouts.length) {
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

