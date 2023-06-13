import { useState, useEffect } from "react"
import SentDocuments from "./SentDocuments"
import { getDocuments } from "../services/documents"
import SendToClientForm from './SendToClientForm'


const Documents = ({ backendRouteCategory }) => {

    const [loading, setLoading] = useState(false)
    const [documents, setDocuments] = useState([])

    useEffect(() => {
        setLoading(true)
        getDocuments(backendRouteCategory)
        .then(res => {
            setDocuments(res)
            setLoading(false)
        })
    }, [])
    
    return(
        <>
            <SendToClientForm />
            <SentDocuments documents={documents} loading={loading} backendRouteCategory={backendRouteCategory}/>
            
        </>
    )
}

export default Documents