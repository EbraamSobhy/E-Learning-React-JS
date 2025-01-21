import { Link, useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/logo.jpg';
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
    signInSuccess,
    signoutFailure,
    signoutStart,
} from "../../redux/user/userSlice";
import axios from "axios";
import './Navbar.css';

function NavBar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser); // Update to use currentUser

    const handleLogout = async () => {
        try {
            dispatch(signoutStart());

            const res = await axios.get("http://localhost:3000/api/auth/signout", {
                withCredentials: true,
            });

            if (res.data.success === false) {
                dispatch(signoutFailure(res.data.message));
                toast.error(res.data.message);
                return;
            }

            toast.success(res.data.message);
            dispatch(signInSuccess()); // Note: Ensure this is correct (consider calling logout instead)
            navigate("/login");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("Error response:", error.response);
                console.error("Error request:", error.request);
            } else {
                console.error("Unexpected error:", error);
            }
            toast.error("An error occurred during logout.");
            dispatch(signoutFailure("An error occurred during logout."));
        }
    };

    const buttonStyles = {
        success: {
            backgroundColor: 'green',
            color: 'white',
            height: '60px',
            width: '100px',
        },
        secondary: {
            backgroundColor: 'gray',
            color: 'white',
            height: '60px',
            width: '100px',
        },
    };

    return (
        <div>
            <Navbar expand="lg" className="bg-black">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img className='logo' src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/tutorials" target="_blank">Tutorials</Nav.Link>
                            <NavDropdown title="Courses" id="collapsible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/content/HTML" target="_blank">HTML</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/content/CSS" target="_blank">CSS</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/content/JavaScript" target="_blank">JavaScript</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/content/ReactJS" target="_blank">React.JS</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/content/NodeJS" target="_blank">Node.JS</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/content/MongoDB" target="_blank">MongoDB</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/content/ExpressJS" target="_blank">Express.JS</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as="a" href="https://6741fe0ac174586eb62b5804--peaceful-lokum-559853.netlify.app/" target="_blank" rel="noopener noreferrer">Online IDE</Nav.Link>
                            <Nav.Link as={Link} to="/TodoList" target="_blank">TodoList</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                            {user ? (
                                <>
                                    <Nav.Link as="span" className="user-info">
                                        {user?.rest?.username ? user.rest.username.split(' ').map(word=>word[0].toUpperCase()).join('') : 'XX'}
                                    </Nav.Link>
                                    <Nav.Link as="span" onClick={handleLogout}>
                                    <Button variant="danger" style={buttonStyles.danger}>Logout</Button>
                                    </Nav.Link>
                                </>
                            ) : (
                                <>
                                    <Nav.Link as={Link} to="/registration/SignUp" target="_blank" id='register'>
                                        <Button variant="success" style={buttonStyles.success}>Sign Up</Button>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/login" target="_blank" id='register1'>
                                        <Button variant="secondary" style={buttonStyles.secondary}>Log In</Button>
                                    </Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
