import { Row, Col, Breadcrumb, Space } from 'antd'
import Documents from './components/Documents'
import './index.css'

const SharedPageLayout = ({ breadCrumbItems, pageTitle, categoryTitle, mainContent }) => {

    return (
        <div className='m-24 flex flex-col gap-8'>
            <Breadcrumb items={ breadCrumbItems } />
            <div className='flex'>
                <h1 className='text-3xl underline'>{ pageTitle }</h1>
            </div>

            <div className="prose max-w-none">{ mainContent }</div>
            <Documents backendRouteCategory={ categoryTitle } pageTitle={pageTitle}/>
        </div>
    )
}

export default SharedPageLayout
