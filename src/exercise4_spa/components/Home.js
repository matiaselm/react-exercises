import React, { useContext } from 'react';
import { UserProvider, UserContext, UserDispatchContext } from '../contexts/UserContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Home = () => {
    const user = useContext(UserContext)

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Card style={{ width: '40ch' }} >
                        <Card.Img variant="top" src="https://i.imgur.com/60z35CR.png" />

                        <Card.Body>
                            <Card.Title >Matias Jalava</Card.Title>
                            <Card.Text>
                                Second year student at Metropolia UAS.
                                Big time fisher and a gamer.
                        </Card.Text>
                            <Card.Link href="https://github.com/matiaselm">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Home