import { useState, useRef } from 'react'
import { Modal} from 'antd'
import '../index.css'
import NewProjectForm from './NewProjectForm'
import { Form, useSubmit } from 'react-router-dom'
import { createProject } from '../services/projects'
// import { Form } from 'antd'



const CreateProjectButton = () => {
    const [modalToOpen, setmodalToOpen] = useState(false)
    const [show, setShow] = useState(false)
    const submit = useSubmit()
    const formRef = useRef();
    const handleSubmit = async (e) => {
      e.preventDefault()
      submit(e.currentTarget.form)
      formRef.current.reset();
      setmodalToOpen(false)
    }
    
    const handleCancel = () => {
      formRef.current.reset();
      setmodalToOpen(false)
    };

    const handleClose = (state) => {
      setShow(state)
    }

    return (
        <div>
            <Button text="+ Create new project" onClick={() => setmodalToOpen(true)}/>
            <Modal
                title="Create a new project"
                centered
                open={modalToOpen}
                // onOk={form.submit}
                footer={null}
                onCancel={handleCancel}
            >
              {/* <NewProjectForm form={form} handleSubmit={handleSubmit}/> */}
              <div >
                <Form method="post" ref={formRef} className='flex flex-col'>
                  <Label labelDisplay="Address"/>
                  <Input name="address" />
                  <Label labelDisplay="Client Name"/>
                  <Input name="clientName" />
                  <Label labelDisplay="Client Email"/>
                  <Input name="clientEmail" />
                  <Label labelDisplay="Start Date"/>
                  <DatePicker />
                  <Label labelDisplay="House Type"/>
                  <Select name='houseType'>
                    <option value="hdb">HDB</option>
                    <option value="condo">Condo</option>
                    <option value="landed">Landed</option>
                    <option value="others">Others</option>
                  </Select>
                  <Button text='Submit' submit onClick={handleSubmit}/>
                </Form>
              </div>
            </Modal>
        </div>
    )
}

export default CreateProjectButton

const Input = ({ name }) => <input name={name} className='bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
const Label = ({ labelDisplay }) => <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' for="address">{labelDisplay}</label>
const DatePicker = () => <input type="date" className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
const Select = ({ name, children }) => <select name={name} class="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">{children}</select>
const Button = ({ text, submit, onClick}) => <button className="py-2 px-5 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type={submit ? 'submit' : ''} onClick={onClick}>{text}</button>