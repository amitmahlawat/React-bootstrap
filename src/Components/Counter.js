import React,{useState} from "react";
import { Container,Row,Col,Card,Button } from "react-bootstrap";


const Counter=()=>{

    const[state,SetState]=useState({count:0})

    const Inc = ()=>{
        SetState({count: state.count+1})
    }
    const Dec = ()=>{
        SetState({count: state.count-1})
    }


    return(
        <Container className="mt-3" >
      <Row>
        <Col xs={4}>
        <Card className="shadow-lg">
            <Card.Body >
            <p className="display-2">Count {state.count}</p>
            <Button variant="success" className="m-1" onClick={Inc}>Increment</Button>
            <Button variant="warning" className="m-1" onClick={Dec}>Increment</Button>
            </Card.Body>
            

        </Card>
        </Col>
      </Row>
    </Container>
        
    )
};

export default Counter;