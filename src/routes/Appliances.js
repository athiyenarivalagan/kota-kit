import { Breadcrumb, Space, Table, Button, Alert } from 'antd'
import { CheckCircleTwoTone } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Input, Select} from 'antd'
import '../index.css'
import { createAppliance } from '../services/appliances'
import AppliancesTable from '../components/pages/appliances/AppliancesTable'


const Appliances = () => {
    let { projectId } = useParams();
    const [fetchedData, setFetchedData] = useState([])

    useEffect(() => {
      axios.get(`http://localhost:3001/api/appliances/project/${projectId}`)
        .then(res => {
          console.log(res.data)
          setFetchedData(res.data)
        })
    }, [])


    return (
        <>
            <Breadcrumb
                items={[
                    {
                        title: <a href="http://localhost:3000/project/">Spatial Planning</a>,
                    },
                    {
                        title: 'Appliances List',
                    },
                ]}
            />

            <h1><u>Appliances List</u></h1>
            <Space>
                <CheckCircleTwoTone />
                <h3>Appliances List</h3>
            </Space>

            <AppliancesTable fetchedData={fetchedData} setFetchedData={setFetchedData}/>
        </>
    )
}

export default Appliances