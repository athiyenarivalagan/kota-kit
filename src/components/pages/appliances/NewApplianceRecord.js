import { Table, Button } from 'antd'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Input, Select} from 'antd'
import '../../../index.css'
import { createAppliance } from '../../../services/appliances'


const NewApplianceRecord = ({ fetchedData, setFetchedData }) => {

    let { projectId } = useParams();
    const initialFormValue = {
      name: '', 
      dimensions: '', 
      isPurchased: false, 
      description: '',
      projectId: projectId
    }
    const [isNewInput, setIsNewInput] = useState(false)
    const [applianceFormData, setApplianceFormData] = useState(initialFormValue)

    const applianceFormHandler = (e) => {
        const fieldName = e.target.name
        const value = e.target.value 
        setApplianceFormData({
          ...applianceFormData,
          [fieldName]: value
        })
        if (value !== '') {
          setIsNewInput(true)
        }
    }
  
    const selectHandler = (value) => {
        setApplianceFormData({
            ...applianceFormData,
            isPurchased: value
        })
    }

    const handleSave = async () => {
        if (!applianceFormData.name) {
            alert('Pls enter a form name')
            return
        }

        try {
            const res = await createAppliance(applianceFormData)
            console.log(res)
            if (res.name) {
            setFetchedData([
                ...fetchedData,
                res
            ])
            setApplianceFormData(initialFormValue)
            setIsNewInput(false)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleCancel = () => {
        setApplianceFormData(initialFormValue)
        setIsNewInput(false)
    }
    
    const newRecordColumns = [
        {
          title: 'Fixed Appliances required',
          dataIndex: 'name',
          key: 'name',
          width: '25%',
          render: () => <Input 
                          placeholder="Add Appliances" 
                          style={{ width: 250 }}
                          className={!isNewInput ? 'newApplianceMain' : ''}
                          name='name'
                          autoComplete="off"
                          value={applianceFormData.name}
                          onChange={applianceFormHandler}
                        />
        },
        {
          title: 'Dimensions',
          dataIndex: 'dimensions',
          key: 'dimensions',
          width: '25%',
          render: () => <Input 
                          placeholder="Appliance dimensions" 
                          style={{ width: 200 }}
                          name='dimensions'
                          autoComplete="off"
                          className={!isNewInput ? 'newApplianceHidden' : ''}
                          value={applianceFormData.dimensions}
                          onChange={applianceFormHandler}
                        />
        },
        {
          title: 'Item Purchased ?',
          dataIndex: 'isPurchased',
          key: 'isPurchased',
          width: '25%',
          render: () => <Select
                          defaultValue="No"
                          style={{ width: 70 }}
                          // onChange={handleChange}
                          options={[
                            { value: true, label: 'Yes' },
                            { value: false, label: 'No' },
                          ]}
                          name='isPurchased'
                          className={!isNewInput ? 'newApplianceHidden' : ''}
                          value={applianceFormData.isPurchased}
                          onChange={selectHandler}
                        />
        },
        {
          title: 'Action',
          dataIndex: 'dimensions',
          key: 'dimensions',
          width: '25%',
          render: () => (<>
            <div className={!isNewInput ? 'newApplianceHidden' : 'newApplianceSave'}>
              <Button size="small" onClick={handleSave}>Save</Button>
              <Button size="small" onClick={handleCancel}>Cancel</Button>
            </div>
          </>)
        },
      ]
 return(
    <>
        <Table
                columns={newRecordColumns}
                dataSource={[{}]}
                showHeader={false}
                pagination={false} 
                expandable={{
                    expandedRowRender: (record) => (
                        <Input 
                            placeholder="Appliance description" 
                            style={{ width: 320 }}
                            autoComplete="off"
                            name='description'
                            className={!isNewInput ? 'newApplianceHidden' : 'descriptionField'}
                            value={applianceFormData.description}
                            onChange={applianceFormHandler}
                        />
                    ),
                    rowExpandable: () => {
                        if (isNewInput) {
                            return true
                        }
                        return false
                    },
                    defaultExpandAllRows: true
                }}
            />
    </>
 )   
}

export default NewApplianceRecord