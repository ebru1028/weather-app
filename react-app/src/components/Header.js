import {Container, Row, Navbar} from "react-bootstrap";

function Header() {
    return (
        <div>
            <Row>
                <Navbar expand="lg" variant="light" bg="light">
                    <Container>
                        <Navbar.Brand href="#">Türkiye Hava Durumu</Navbar.Brand>
                    </Container>
                </Navbar>
            </Row>
        </div>
    )

}

export default (Header);