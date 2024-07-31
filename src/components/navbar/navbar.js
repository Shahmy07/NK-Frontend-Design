import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import { Button } from 'antd';
import { CarFilled, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function MainNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home" className='fontsize84px'>
          NK
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-2 fontsize16px align-items-center">
            <Nav.Link href="#home" className='fw-semibold'>About us</Nav.Link>
            <Link to="/formSellItem">test</Link>
            <Nav.Link href="#link" className='fw-semibold'>How to sell</Nav.Link>
            <Nav.Link href="#home" className='fw-semibold'>How to buy</Nav.Link>
            <Nav.Link href="#link" className='fw-semibold'>Become franchise</Nav.Link>
            <Nav.Link href="#home" className='fw-semibold'>Become freelancer</Nav.Link>
            <Nav.Link href="#link" className='fw-semibold'>Reference Earnings</Nav.Link>
            <Nav.Link href="#home" className='fw-semibold'>Reviews</Nav.Link> 
            <Button type="primary" className='bgNKred fw-semibold'>Deal <CarFilled className='fontsize20px' /></Button> 
            <Nav.Link href="#home" className='fw-semibold fontsize28px'><UserOutlined /></Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;