import { 
  Nav,
  Navbar, 
  Container 
} from 'react-bootstrap';
import './NavBarStrap.css'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'

function NavBarStrap() {
  return (
    <Navbar className='navbar_i' variant='dark' expand="lg">
    <Container fluid>
      <Link style={{textDecoration: 'none'}} to='/'>
        <p className='play_logo'>Play Dj's</p> 
        <img className='logo_navbar' src={logo} alt="" style={{width: '200px'}}/>
      </Link>
      <Navbar.Toggle className='menu' aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto h5 ">
          <Link className='text' to='/'>Início</Link>
          <Link className='text' to='/sobre'>Sobre</Link>
          <Link className='text' to='/planos'>Planos</Link>
          <Link className='text' to='/orçamento'>Orçamento</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBarStrap;