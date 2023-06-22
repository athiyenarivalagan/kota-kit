import { breadCrumbItems } from '../components/pages/electricalPlan/electricalPlanHelpers'
import * as React from "react"
import useMarkdoc from '../hooks/useMarkdoc';
import SharedPageLayout from '../SharedPageLayout'  

const ElectricalPlan = () => {

    const markDocContent = useMarkdoc('electricalPlan')

    const mainContent = () => {
        return markDocContent ? markDocContent : null
    }

    return (
        <>
            <SharedPageLayout 
                breadCrumbItems={ breadCrumbItems }
                header={ <u>Electrical Plan</u> } 
                categoryTitle={ 'electricalPlans' }
                mainContent={ mainContent() } 
            />
        </>
    )
}

export default ElectricalPlan
