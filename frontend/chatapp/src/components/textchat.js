import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/esm/Button";
import Badge  from "react-bootstrap/esm/Badge";
import { useRef,useEffect } from "react";
export default function TextChat(){

    const [isConnecting,setIsConnecting] = useState(false);
    const [connected,setConnected] = useState(false);
    const [textinput,setTextInput] = useState("");
    const textchangehandler =(event)=>{
        setTextInput(event.target.value);
    
    }
    const [messagesStack,setMessageStack] = useState([])


    const sendMessageHandle =()=>{
        const sendmsg = "You: "+ textinput;
        setMessageStack([...messagesStack,sendmsg])
        setTextInput("");
    }
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messagesStack]); // Dependency array includes messagesStack

    return(
        <>
            <Container style={{border:'2px Solid Black', alignItems:"flex-start" ,width:'95vh'}}> 
                <Col>
                    <Row>
                        <Container style={{border:'2px Solid Black', alignItems:"flex-start",minHeight:"5vh"}}>
                            <Col>
                                <h6 style={{flex:'row'}}>Status: 
                                    {isConnecting&& !connected&&<h6>Connecting to Stranger.</h6>} 
                                    {!isConnecting&& connected&&<h6>connected</h6>}
                                    {!isConnecting && !connected && <h6>Disconnected</h6>}
                                </h6>
                            </Col>
                        </Container>
                    </Row>
                    <Row >
                        <Container style={{border:'2px Solid Black', alignItems:"flex-start",minHeight: '75vh', maxHeight: '75vh', overflowY: 'auto'}}>
                            <div style={{Height:"75vh"}}>
                            {messagesStack.map((item, index) => {
                                            // Splitting the message into "You" and the rest of the message
                                            const [firstPart, ...rest] = item.split(': ');
                                            const restOfMessage = rest.join(': ');

                                            return (
                                                <div key={index} className="p-2">
                                                <span style={{ color: firstPart === 'You' ? 'blue' : 'inherit', fontSize: '24px' }}>{firstPart}:</span>
                                                <span style={{ fontSize: '24px' }}> {restOfMessage}</span>
                                                </div>
                                            );
                                            }
                                            )}

                                        {/* Scroll to this element */}
                                        <div ref={messagesEndRef} />
                            </div>
                        </Container>
                    </Row>
                    <Row>
                        <Container style={{border:'2px Solid Black', display:'flex',flexDirection:'row',alignItems:"flex-start",minHeight:"10vh",maxHeight:'10vh'}}>
                           <Button > {(connected || isConnecting)&& <h2>Stop</h2>}{!connected && <h2>Start</h2>  }</Button>
                           <div>
                                <input type="text" style={{minWidth:'70vh',maxWidth:'70vh',minHeight:'8vh',maxHeight:'80vh',padding:'2px'}} value={textinput} placeholder="Type your Message..." onChange={textchangehandler} />
                           </div>
                           <Button onClick={sendMessageHandle} ><h2>Send</h2></Button>
                        </Container>
                    </Row>
                </Col>
            </Container>
        </>
    )
}