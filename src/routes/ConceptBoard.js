import { breadCrumbItems } from '../components/pages/conceptBoard.js/conceptBoardHelpers'
import useMarkdoc from '../hooks/useMarkdoc'
import SharedPageLayout from '../SharedPageLayout'  

const ConceptBoard = () => {
    const conceptBoardContent = useMarkdoc('conceptBoard')

    const mainContent = () => {
        return conceptBoardContent ? conceptBoardContent : null
    }

    return (
        <>
            <SharedPageLayout 
                breadCrumbItems={ breadCrumbItems }
                header={'Concept Board'} 
                categoryTitle={ 'ConceptBoards' }
                mainContent={ mainContent() } 
            />
        </>
    )
}

export default ConceptBoard