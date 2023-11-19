import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';
import { useState } from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import ReCAPTCHA from "react-google-recaptcha";
import TextChat from './textchat';


export default function Randomchat(){

    const [inputText,setInputText]  = useState("");
    const [stackItems, setStackItems] = useState([]);
    const [isChatExchangeVisible, setIsChatExchangeVisible] = useState(false);
    const [recaptchaverfied,setRecaptchaVerified] = useState(true);
    const handleInputChange = (event) => {
        setInputText(event.target.value);
      };
    
      const handleKeyPress = (event) => {
        if (event.key === 'Enter' && inputText.trim()) {
          // Add the inputText to the items array
          setStackItems([...stackItems, inputText]);
          setInputText(''); // Clear the input field after adding
        }
      };
      const handleRemoveItem = (indexToRemove) => {
        setStackItems(stackItems.filter((_, index) => index !== indexToRemove));
      };
      const handleTxtChatClick = () => {
        setIsChatExchangeVisible(!isChatExchangeVisible);
        // Add your logic here for what should happen when the chat button is clicked
      };

    return (
        <div style={{paddingTop:'80px'}}>
            {!isChatExchangeVisible && 
            <div className='chatlandingui' >
                    <div className='infodiv'  style={{margin:'15px 35px 15px 35px'}}>
                        <div className="alert alert-info w-100 mb-0" >
                            <h1>Important!</h1>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item" style={{backgroundColor:'transparent'}}>
                                    <h5>We Encourage users to interact anonymously without the need
                                        for  personal profiles or revealing identifiable information.</h5></li>
                                <li class="list-group-item" style={{backgroundColor:'transparent'}}>
                                    <h5>We Urge you to Emphasize the importance of treating others with respect and courtesy. 
                                        Disallow any form of bullying, harassment, or discriminatory behavior.</h5>
                                </li>
                                <li class="list-group-item" style={{backgroundColor:'transparent'}}>
                                    <h5>Specify the minimum age requirement for using the platform is 13 years,
                                        and implement measures to ensure compliance.</h5>
                                    </li>
                                <li class="list-group-item" style={{backgroundColor:'transparent'}}>
                                    <h5>We Explicitly prohibit the sharing of personal information such as full names, addresses,
                                        phone numbers, and financial details.</h5>
                                </li>
                            </ul>
                        </div>       
                    </div>
                    <div className='chatcontrol' style={{margin:'15px 65px 15px 65px',padding:'2px'}}>
                        <div className="alert alert-warning w-60 mb-0"  >
                            <h2 style={{ textAlign: 'center' ,margin:'2px' }}>Video will be monitored.Keep it Clean!</h2>
                        </div>
                        <div className="container-fluid w-60 vh-100 d-flex flex-column flex-md-row" style={{ margin: '0 auto', maxWidth: '70%' }}>
                            {/* Left Section - Chat UI */}
                            
                            <div className="col-12 col-md-6 d-flex flex-column justify-content-start align-items-center">
                            <h6 style={{ margin: '10px auto' ,justifyContent:'flex-start',textAlign:'start'}}>Enter common interests ortopics to talk about.</h6>
                                <div style={{display:'flex',flexWrap:'wrap',gap:'2px',border:'2px red',maxHeight:'180px',borderRadius:'5px',border:'2px solid Black',overflowY:'auto',padding:'5px'}}>
                                    {stackItems.map((item, index) => (
                                        <div key={index}  className="p-2">
                                            <Badge>
                                                <span className="me-2">{item}</span>
                                                
                                                <CloseButton onClick={() => handleRemoveItem(index)} style={{backgroundColor:'white'}} ></CloseButton>
                                            </Badge>
                                            
                                        </div>
                                        
                                    ))}
                                    <input 
                                        type="text" 
                                        value={inputText} 
                                        onChange={handleInputChange} 
                                        onKeyPress={handleKeyPress} 
                                        placeholder="Enter text"
                                        className="p-2"
                                    />
                                </div>
                            
                            </div>
                            {/* Right Section - Chat UI */}
                            <div className="col-12 col-md-6 d-flex flex-row justify-content-start align-items-start"style={{ margin: '10px auto', maxWidth: '70%' }}>
                                <h4>Start With</h4>
                                <Button onClick={handleTxtChatClick}>Text Chat</Button>
                                <h3>or</h3>
                                <Button>Video Chat</Button>
                                    

                            </div>
                                
                            

                        </div>
                    </div>
            </div>}
            {isChatExchangeVisible && recaptchaverfied&&
            <div className='chatexchangeui'>
                  <TextChat/>      
            </div>
            }

        </div>
    );
}
function Chatui(){
    return(
        <>

        </>
    )
}