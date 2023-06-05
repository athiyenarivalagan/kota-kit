import { Breadcrumb, Space } from 'antd'
import { CheckCircleTwoTone } from '@ant-design/icons'
import UploadAndSend from '../components/UploadAndSend'


const Furnishing = () => {

    return (
        <>
            <Breadcrumb
                items={[
                    {
                        title: <a href="http://localhost:3000/project/">Spatial Planning</a>,
                    },
                    {
                        title: 'Furnishing Board',
                    },
                ]}
            />

            <h1><u>Furnishing Board</u></h1>
            <Space>
                <CheckCircleTwoTone />
                <h3>Guidelines</h3>
            </Space>

            <p>
                When it's time to choose one concept, ask yourself questions to decide
                which of your concepts works best with the site, your clients, and the
                story they want to tell. Sometimes this will point you to an obvious
                choice and sometimes it won't. When it doesn't, do your best to make a
                choice and go with it.
            </p>
            <div>
                {/* Placeholder for copy referencing iTab */}
            </div>

            <Space>
            </Space>
            <UploadAndSend name={"Furnishing Board"}/>
            
        </>
    )
}    


export default Furnishing