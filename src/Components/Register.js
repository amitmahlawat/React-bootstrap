import React, { useState } from "react";
import { Container,Row,Col,Card, Form, Button } from "react-bootstrap";


const Register=()=>{

    const[State,SetState]=useState({
        user:{
            username:'',
            email:'',
            password:''
        }
    })

    const UpdateInput=(e)=>{
        SetState({
            ...State,
            user:{
                ...State.user,
                [e.target.name]: e.target.value
            }
        })
    }
    const register=(e)=>{
        e.preventDefault();
        console.log(State.user)
        
        

    }

    return (
        <>
        <Container className="mt-3">
            <Row>
                <Col xs={3}>
                <Card className="shadow-lg">
                    <Card.Header className="p-3" style={{backgroundColor:'#ffc107'}}>
                    <h4>Register</h4>
                    </Card.Header>
                    <Card.Body style={{backgroundColor: '#f7f5f0'}}>
                    <Form>
                        <Form.Group>
                            <Form.Control
                            name="username"
                            onChange={UpdateInput} 
                            className="mb-3" type="text" placeholder="Username"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control 
                            name="email"
                            onChange={UpdateInput} 
                            className="mb-3" type="text" placeholder="email"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                            name="password"
                            onChange={UpdateInput} 
                            className="mb-3" type="password" placeholder="Password"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Button onClick={register} variant="warning" type="submit">Register</Button>
                        </Form.Group>
                    </Form>
                    </Card.Body>
                    
                </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
};

export default Register;