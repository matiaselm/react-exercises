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
                <Col xs={4}>
                    <Card >
                        <Card.Img variant="top" src="https://i.imgur.com/60z35CR.png" />

                        <Card.Body>
                            <Card.Title >Matias Jalava</Card.Title>
                            <Card.Text>
                                Second year student at Metropolia UAS. <br></br>
                                Big time fisher and gamer. :') <br></br>
                                Creator of this spaghetti-website
                        </Card.Text>
                            <Card.Link href="https://github.com/matiaselm">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <h1>Welcome</h1>
                    <p>This is a simple project-website built with React</p>
                    <h3>Front end:</h3>
                    <ul>
                        <li>React</li>
                        <li>Bootsrap</li>
                        <li>React-Router</li>
                        <li>axios</li>
                    </ul>
                    <h3>Back-End:</h3>
                    <ul>
                        <li>express</li>
                        <li>MongoDB/mongoose</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Home