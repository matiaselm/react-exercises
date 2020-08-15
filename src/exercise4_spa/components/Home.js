import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={4}>
                    <Card >
                        <Card.Img variant="top" src="https://i.imgur.com/zGDdDr6.png" />

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
                <Col xs={4}>
                    <Card>
                        <Card.Body>
                            <h1>Welcome</h1>
                            <p>This is a simple project-website built with React</p>
                            <h3>Front end:</h3>
                            <ul>
                                <li>create-react-app</li>
                                <li>React</li>
                                <li>react-bootsrap</li>
                                <li>react-router</li>
                                <li>react-router-bootsrap</li>
                                <li>axios</li>
                            </ul>
                            <h3>Back end:</h3>
                            <ul>
                                <li>Node.js</li>
                                <li>nodemon</li>
                                <li>express.js</li>
                                <li>MongoDB</li>
                                <li>mongoose</li>
                                <li>body-parser</li>
                                <li>express-validator</li>
                                <li>mongoose-unique-validator</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card>
                        <Card.Body>

                            <Card.Title >Sivun toiminnallisuus jäi uupumaan viimeiseen palautukseen: </Card.Title><br></br>
                            <Card.Text>Käyttäjien laskujen hallintaa ei ole ollenkaan sivulla, sillä en ehtinyt sitä rakentaa loppuun backendin puolella. <br></br><br></br>
                            Sovellukseen myös jäi joitain bugeja: <br></br><br></br>
                                - Adminiksi käyttäjän muuttaminen lennossa ei päivitä käyttäjävalikon button-elementtejä.<br></br><br></br>
                                - Navigation-valikon sisäkkäiset elementit herjaa yhteensopimattomuudesta<br></br><br></br>
                                - Käyttäjän varmistaminen tokenilla unohtui.
                                    Käyttäjä saa tokenin backendista ja se tallennetaan UserContextiin,
                                    sitä ei vaan hyödynnetä eikä backend sitä pyyntöjen käsittelyssä vaadi
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Home