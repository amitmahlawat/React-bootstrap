import React from "react";
import { Container,Row,Col,Card } from "react-bootstrap";

const UserList =(props)=>{

    const Products=props.data

    return(
        <>
        {Products.map(item=> <Container className="mt-5">
            <Row >
            <Col xs={3}>
            <Card  className="shadow-lg">
            <Card.Img variant="top" src={item.imageUrl}></Card.Img>
            <Card.Body>
                <Card.Title>
                {item.title}
                </Card.Title>
                <Card.Text>
                {item.price}
                </Card.Text>
                
            </Card.Body>
            </Card>
            </Col>
        </Row>
       </Container>)}
        
           

       
        
        
        </>
    )
};


export default UserList;