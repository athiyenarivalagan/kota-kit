import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
// import { Input, Select} from 'antd'
import '../index.css'
// import { createAppliance } from '../services/appliances'
import AppliancesTable from '../components/pages/appliances/AppliancesTable'
import breadCrumbItems from '../components/pages/appliances/appliancesHelpers'
import SharedPageLayout from '../SharedPageLayout'  

const Appliances = () => {
    let { projectId } = useParams();
    const [fetchedData, setFetchedData] = useState([])

    useEffect(() => {
      axios.get(`http://localhost:3001/api/appliances/project/${projectId}`)
        .then(res => {
          setFetchedData(res.data)
        })
    }, [])

    const mainContent =() => {
        return (
            <>
                <AppliancesTable fetchedData={fetchedData} setFetchedData={setFetchedData}/>
                {/* {furnishingContent ? furnishingContent : null} */}
            </>
        )
    }

    return (
        <>
            <SharedPageLayout 
                breadCrumbItems={ breadCrumbItems }
                pageTitle={'Appliances List'} 
                categoryTitle={ 'spatialLayout' }
                mainContent={ mainContent() } 
            />
        </>
    )
}

export default Appliances