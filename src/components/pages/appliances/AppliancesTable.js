import { useState } from 'react'
import { Table, Input, Select, Button } from 'antd'
import NewApplianceRecord from './NewApplianceRecord'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { removeAppliance, updateAppliance } from '../../../services/appliances'

const AppliancesTable = ({ fetchedData, setFetchedData}) => {

    const [editId, setEditId] = useState('')
    const [formValues, setFormValues] = useState({})

    const handleSave = async (id) => {
        const res = await updateAppliance(id, formValues)
        if (res.status === 200) {
            const newFetchedData = fetchedData.map(item => item.id === res.data.id ? res.data : item)
            setFetchedData(newFetchedData)
        } else {
            console.log(res.data.message)
        }
        setEditId('')
    } 

    const handleDelete = async (id) => {
        const res = await removeAppliance(id)
        if (res.status === 200) {
            const newFetchedData = fetchedData.filter(item => item.id !== id)
            setFetchedData(newFetchedData)
        } else {
            console.log(res.data.message)
        }
    }

    const columns = [
        {
          title: 'Fixed Appliances required',
          dataIndex: 'name',
          key: 'name',
          width: '25%',
          render: (text, record) => {
            if (editId === record.id) {
                return <Input value={formValues.name}
                        onChange={(e) => setFormValues({...formValues, name: e.target.value})}
                        />
            }
            return text
          }
        },
        {
          title: 'Dimensions',
          dataIndex: 'dimensions',
          key: 'dimensions',
          width: '25%',
          render: (text, record) => {
            if (editId=== record.id) {
                return <Input value={formValues.dimensions}
                        onChange={(e) => setFormValues({...formValues, dimensions: e.target.value})}
                        />
            }
            return text
          }
        },
        {
          title: 'Item Purchased ?',
          dataIndex: 'isPurchased',
          key: 'isPurchased',
          width: '25%',
          render: (text, record) => {
            if (editId=== record.id) {
                return <Select
                          style={{ width: 70 }}
                          options={[
                            { value: true, label: 'Yes' },
                            { value: false, label: 'No' },
                          ]}
                          value={formValues.isPurchased}
                          name='isPurchased'
                          onChange={(value) => setFormValues({...formValues, isPurchased: value})}
                        />
            }
            return (record.isPurchased ? "Yes": <a onClick={(e) => {e.stopPropagation()}}>Send reminder to client</a>)
          },
        },
        {
          title: '',
          dataIndex: '',
          key: '',
          width: '25%',
          render: (text, record) => {
            if (editId=== record.id) {
                return(
                    <>
                        <Button size="small" onClick={(e) => {
                            e.stopPropagation()
                            handleSave(record.id)
                        }}>Save</Button>
                        <Button size="small" onClick={(e) => {
                            e.stopPropagation()
                            setEditId('')
                        }}>Cancel</Button>
                    </>
                )
            }
            return (
                <>
                    <EditOutlined onClick={(e) => { 
                                    e.stopPropagation()
                                    setEditId(record.id)
                                    setFormValues(record)
                                }}
                                style={{fontSize:"24px", marginRight: "16px"}}
                    />
                    <DeleteOutlined onClick={(e) => { 
                                    e.stopPropagation()
                                    handleDelete(record.id)
                                }}
                                style={{fontSize:"24px"}}
                    />
                </>
            )
          },
        }
      ]


    return(
        <>
            <Table
                    columns={columns}
                    expandable={{
                    expandedRowRender: (record) => (<p style={{ margin: 0}}>{record.description}</p>),
                    expandRowByClick: true,
                    }}
                    dataSource={fetchedData}
                    rowKey="id"
                    pagination={false} 
                />

            <NewApplianceRecord fetchedData={fetchedData} setFetchedData={setFetchedData}/>
        </>
    )
}

export default AppliancesTable