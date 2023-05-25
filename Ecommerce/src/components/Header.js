import { Navbar, Nav } from "react-bootstrap";
const Header = () => {
    return <>
    <Navbar className="justify-content-center" bg="dark" variant="dark">
        <Nav>
        <Nav.Item>
            <Nav.Link>
                Home
            </Nav.Link>
        </Nav.Item>
        <Nav.Item><Nav.Link>
                Store
            </Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link>
                About
            </Nav.Link></Nav.Item>
        </Nav>
        </Navbar>
    </>
}

export default Header;