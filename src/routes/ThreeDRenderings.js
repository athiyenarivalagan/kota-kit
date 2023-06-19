import { Row, Col } from 'antd'
import useMarkdoc from '../hooks/useMarkdoc'

const ThreeDRenderings = () => {
    const threeDRenderingsContent = useMarkdoc('3dRenderings')
    return (
        <Row justify="center" align="middle" style={{ height: '100vh' }}>
            <Col>
                {threeDRenderingsContent ? threeDRenderingsContent : null}
            </Col>
        </Row>
    )
}

export default ThreeDRenderings