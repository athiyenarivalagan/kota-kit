import breadCrumbItems from '../components/pages/furnishing/furnishingHelpers'
import useMarkdoc from '../hooks/useMarkdoc'
import SharedPageLayout from '../SharedPageLayout'

const FurnishingBoard = () => {
    const furnishingContent = useMarkdoc('furnishing')

    const mainContent = () => {
        return furnishingContent ? furnishingContent : null
    }

    
    return (
        <>
            <SharedPageLayout 
                breadCrumbItems={ breadCrumbItems }
                pageTitle={'Furnishing Board'} 
                categoryTitle={ 'furnishingBoards' }
                mainContent={ mainContent() } 
            />
        </>
    )
}    


export default FurnishingBoard