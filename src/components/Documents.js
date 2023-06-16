import { useState, useEffect } from "react"
import SentDocuments from "./SentDocuments"
import { getDocuments } from "../services/documents"
import SendToClientForm from './SendToClientForm'


const Documents = ({ backendRouteCategory }) => {

    const [loading, setLoading] = useState(false)
    const [documents, setDocuments] = useState([])
    const [newDocument, setNewDocument] = useState(null)

    useEffect(() => {
        setLoading(true)
        getDocuments(backendRouteCategory)
        .then(res => {
            setDocuments(res)
            setLoading(false)
        })
    }, [backendRouteCategory])
    
    return(
        <>
            <SendToClientForm 
                backendRouteCategory={backendRouteCategory} 
                setNewDocument={setNewDocument}
            />

            <SentDocuments 
                documents={documents} 
                newDocument={newDocument} 
                loading={loading} 
                backendRouteCategory={backendRouteCategory}
            />
        </>
    )
}

export default Documents