

import { useState, useEffect } from "react"; // to animate ( delete and type ) --> what's useState & useEffect
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Example = () => {
    const [fontSize,setFontSize] = useState(16);
    return(
        <section className="Ex"> 
            <Container>
                <Row>
                    <Col>
                    <button onClick={() => console.log('connect') }>Experience <ArrowRightCircle size={25} /></button>
            </Col>
            </Row>
            </Container>
        </section>
    );
};
