import { Space, Row, Col, Breadcrumb } from 'antd'
import Guidelines from '../components/pages/furnishing/Guidelines'
import breadCrumbItems from '../components/pages/furnishing/furnishingHelpers'
import Documents from '../components/Documents'
import useMarkdoc from '../hooks/useMarkdoc'

const FurnishingBoard = () => {
    const furnishingContent = useMarkdoc('furnishing')
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
                        <u>Furnishing Board</u>
                    </h2>
                </Col>
            </Row>

            <div>
                {/* Placeholder for copy referencing iTab */}
            </div>

            <Row justify="center">
                <Col span={20}>
                    <Space direction="vertical" size={20} style={{ width: '100%' }}>
                        {furnishingContent ? furnishingContent : null}
                        <Documents backendRouteCategory={'furnishingBoards'}/>
                    </Space>
                </Col>
            </Row>
        </div>
    )
}    


export default FurnishingBoard