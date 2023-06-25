import { breadCrumbItems } from '../components/pages/conceptBoard.js/conceptBoardHelpers'
import useMarkdoc from '../hooks/useMarkdoc'
import SharedPageLayout from '../SharedPageLayout'  

const Materials = () => {
    const materialsContent = useMarkdoc('materials')

    const mainContent = () => {
        return materialsContent ? materialsContent : null

    }

    return (
        <>
            <SharedPageLayout 
                breadCrumbItems={ breadCrumbItems }
                header={ <u>Material List</u> } 
                categoryTitle={ 'Material List' }
                mainContent={ mainContent() } 
            />
        </>
    )
}

export default Materials