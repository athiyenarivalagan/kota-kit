import { Steps } from 'antd'
import { breadCrumbItems, stepsItems } from '../components/pages/spatialLayout/spatialLayoutHelpers'
import useMarkdoc from '../hooks/useMarkdoc'
import SharedPageLayout from '../SharedPageLayout'  

const SpatialLayout = () => {
    const spatialLayoutContent = useMarkdoc('spatialLayout')

    const mainContent = () => {
        return (
            <>
                <Steps progressDot current={1} items={stepsItems} />
                { spatialLayoutContent ? spatialLayoutContent : null }
            </>
            
        )
    }

    return (
        <>
            <SharedPageLayout 
                breadCrumbItems={ breadCrumbItems }
                header={ <u>Spatial Layout</u> } 
                categoryTitle={ 'spatialLayout' }
                mainContent={ mainContent() } 
            />
        </>
    )
}

export default SpatialLayout
