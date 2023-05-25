import { Breadcrumb, Steps } from 'antd'
import { breadCrumbItems, stepsItems } from '../components/pages/spatialLayout/spatialLayoutHelpers'
import Guidelines from '../components/pages/spatialLayout/Guidelines'
import UploadFiles from '../components/pages/spatialLayout/UploadFiles'


const SpatialLayout = () => {
    return (
        <>
            <Breadcrumb items={breadCrumbItems}/>
            <Steps progressDot current={1} items={stepsItems}/>
            <Guidelines />
            <UploadFiles />
        </>
    )
}

export default SpatialLayout
