import { Breadcrumb, Steps, Col, Row, Space } from 'antd'
import { breadCrumbItems, stepsItems } from '../components/pages/spatialLayout/spatialLayoutHelpers'
import Guidelines from '../components/pages/spatialLayout/Guidelines'
import Documents from '../components/Documents'


const SpatialLayout = () => {
    return (
        <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
            <Row justify="end">
                <Col span={6}>
                    <Breadcrumb items={breadCrumbItems} />
                </Col>
            </Row>
            
            <Row>
                <Col span={8} offset={2}>
                    <h2>
                        <u>Spatial Layout</u>
                    </h2>
                </Col>
            </Row>
            
            <Row justify="center">
                <Col span={20}>
                    <Space direction="vertical" size={20} style={{ width: '100%' }}>
                        <Steps progressDot current={1} items={stepsItems} />
                        <Guidelines />
                        <Documents backendRouteCategory={'spatialLayouts'}/>
                    </Space>
                </Col>
            </Row>
        </div>
    )
}

export default SpatialLayout
