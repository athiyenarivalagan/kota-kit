import { Breadcrumb, Steps } from 'antd'
import { breadCrumbItems, stepsItems } from '../components/pages/spatialLayout/spatialLayoutHelpers'
import Guidelines from '../components/pages/spatialLayout/Guidelines'
import UploadAndSend from '../components/pages/spatialLayout/UploadAndSend'
import Documents from '../components/pages/spatialLayout/Documents'


const SpatialLayout = () => {
    return (
        <>
            <Breadcrumb items={breadCrumbItems}/>
            <Steps progressDot current={1} items={stepsItems}/>
            <Guidelines />
            <UploadAndSend />
            <Documents />
        </>
    )
}

export default SpatialLayout
