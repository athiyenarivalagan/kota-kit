import { Steps } from 'antd'
import { breadCrumbItems, stepsItems } from '../components/pages/spatialLayout/spatialLayoutHelpers'
import useMarkdoc from '../hooks/useMarkdoc'
import SharedPageLayout from '../SharedPageLayout'  

const SpatialLayout = () => {
    const spatialLayoutContent = useMarkdoc('spatialLayout')

    const mainContent = () => {
        return (
            <div className='flex gap-16 flex-col mt-16'>
                <Steps progressDot current={1} items={stepsItems} />
                { spatialLayoutContent ? spatialLayoutContent : null }
            </div>
            
        )
    }

    return (
        <>
            <SharedPageLayout 
                breadCrumbItems={ breadCrumbItems }
                pageTitle={'Spatial Layout'} 
                categoryTitle={ 'spatialLayout' }
                mainContent={ mainContent() } 
            />
        </>
    )
}

export default SpatialLayout
