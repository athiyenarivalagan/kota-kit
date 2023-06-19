import { Space, Row, Col, Breadcrumb } from 'antd'
import Guidelines from '../components/pages/furnishing/Guidelines'
import breadCrumbItems from '../components/pages/furnishing/furnishingHelpers'
import Documents from '../components/Documents'
import useMarkdoc from '../hooks/useMarkdoc'

const ElevationDrawings = () => {
    const elevationDrawingsContent = useMarkdoc('elevationDrawings')
    return (
        <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
            <Row justify="end">
                <Col span={6}>
                    <Breadcrumb items={ breadCrumbItems } />
                </Col>
            </Row>

            <Row>
                <Col span={8} offset={2}>
                    <h2>
                        <u>Elevation Drawings</u>
                    </h2>
                </Col>
            </Row>

            <div>
                {/* Placeholder for copy referencing iTab */}
            </div>

            <Row justify="center">
                <Col span={20}>
                    <Space direction="vertical" size={20} style={{ width: '100%' }}>
                        {elevationDrawingsContent ? elevationDrawingsContent : null}
                        <Documents backendRouteCategory={'elevationDrawings'}/>
                    </Space>
                </Col>
            </Row>
        </div>
    )
}

export default ElevationDrawings