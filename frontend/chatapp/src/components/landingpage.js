import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
export default function Landingpage(){
    return(
        <>
            <Container >
                <Row>
                    <Col>
                        <h1><Badge bg="secondary">Welcome to RandomChat! </Badge></h1>
                        <h2>Explore the joy of connecting with strangers around the world.Engage in spontaneous and meaningful conversations without the need for profiles or logins.</h2>
                        <h2>Discover shared interests, share your thoughts, and find your  community. Your privacy is our priority. We employ advanced security measures to ensure a safe and enjoyable experience for all.</h2>
                    </Col>
                    <Col>
                        <Row><Displayprods/></Row>
                        
                    </Col>
                </Row>
            </Container>
        </>
    )
}




function Displayprods(){
    const btn1style = {
        backgroundColor: '#4BF079',
        borderColor: '#4BF079',
        
    
      };
      const btn2style= {
        backgroundColor: '#034458',
        borderColor: '#034458',
    
    
      };
    
    return(
        <>
            <Row className="mb-3" ><Link to='/randomchat' style={btn1style} className='btn btn-primary mr-2' >RandomChat</Link>{'     '}</Row>
            <Row> <Link style={btn2style} className='btn btn-primary mr-2'>Explore Groups{' '}</Link></Row>
        </>
    )
}
