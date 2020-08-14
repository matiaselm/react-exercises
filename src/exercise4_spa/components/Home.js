import React, { useContext } from 'react';
import { UserProvider, UserContext, UserDispatchContext } from '../contexts/UserContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    const user = useContext(UserContext)

    return (
        <Container>
            <Row>
                <Col>Welcome {user.name}</Col>
                <Col> My name is Matias Jalava</Col>
            </Row>
            <Row>
                <Col>Second year student at Metropolia UAS</Col>
                <Col>matias@elm.fi</Col>
                <Col>050313952</Col>
            </Row>
        </Container>
    )
}

export default Home