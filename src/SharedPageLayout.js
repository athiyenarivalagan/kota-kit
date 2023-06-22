import { Row, Col, Breadcrumb, Space } from 'antd'
import { CheckCircleTwoTone } from '@ant-design/icons'
import Documents from './components/Documents'

const SharedPageLayout = ({ breadCrumbItems, header, categoryTitle, mainContent }) => {

    return (
        <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
            <Row justify="end">
                <Col span={6}>
                    <Breadcrumb items={ breadCrumbItems } />
                </Col>
            </Row>

            <Row>
                <Col span={8} offset={2}>
                    <Space>
                        <CheckCircleTwoTone />
                        <h2>{ header }</h2>
                    </Space>
                </Col>
            </Row>

            <Row justify="center">
                <Col span={20}>
                    <Space 
                        direction="vertical" 
                        size={20} 
                        style={{ width: '100%' }}
                    >
                        { mainContent }
                        <Documents backendRouteCategory={ categoryTitle }/>
                    </Space>
                </Col>
            </Row>
        </div>
    )
}

export default SharedPageLayout
