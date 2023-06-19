import { Space, Row, Col, Breadcrumb } from 'antd'
import breadCrumbItems from '../components/pages/furnishing/furnishingHelpers'
import Documents from '../components/Documents'
import * as React from "react"
import useMarkdoc from '../hooks/useMarkdoc';

const Electrical = () => {

    const markDocContent = useMarkdoc('electrical')
    
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
                        <u>Electrical Plan</u>
                    </h2>
                </Col>
            </Row>

            <div>
                {/* Placeholder for copy referencing iTab */}
            </div>

            <Row justify="center">
                <Col span={20}>
                    <Space direction="vertical" size={20} style={{ width: '100%' }}>
                        {markDocContent ? markDocContent : null}
                        <Documents backendRouteCategory={'electrical'}/>
                    </Space>
                </Col>
            </Row>
        </div>
    )
}

export default Electrical
