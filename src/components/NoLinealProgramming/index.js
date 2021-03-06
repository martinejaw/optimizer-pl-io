import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Jumbotron, Container, Row, Col } from "reactstrap";

const NoLinealProgramming = () => {
    useEffect(() => {
        document.title = "Programacion no lineal"
    }, []);
    return (
        <Container fluid className="App">
            <Row className="">
                <Col xs={12} md={6} className="mx-auto my-5">
                    <Jumbotron>
                        <Row>
                            <h2 className="mx-auto">¡Bien!, Ahora Seleccione un Modelo.</h2>
                        </Row>
                        <Row className="mt-3 mx-auto">
                            <Col>
                                <Link to={"/NoLinealProgramming/Lagrange"}>
                                    <Button size='lg' outline color="success">Lagrange</Button>
                                </Link>

                            </Col>
                        </Row>
                        <Row className="mt-3 mx-auto">
                            <Col>
                                <Link to={"/NoLinealProgramming/Kuhn-Tucker"} >
                                    <Button size='lg' outline color="success">Kuhn y Tucker</Button>

                                </Link>
                            </Col>
                        </Row>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
};

export default NoLinealProgramming;