import { breadCrumbItems } from '../components/pages/elevationDrawings/elevationDrawingsHelpers'
import useMarkdoc from '../hooks/useMarkdoc'
import SharedPageLayout from '../SharedPageLayout'  

const ElevationDrawings = () => {
    const elevationDrawingsContent = useMarkdoc('elevationDrawings')

    const mainContent = () => {
        return elevationDrawingsContent ? elevationDrawingsContent : null

    }
    return (
        <>
            <SharedPageLayout 
                breadCrumbItems={ breadCrumbItems }
                pageTitle={'Elevation Drawings'} 
                categoryTitle={ 'elevationDrawings' }
                mainContent={ mainContent() } 
            />
        </>
    )
}

export default ElevationDrawings