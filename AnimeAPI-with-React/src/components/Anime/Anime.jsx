import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import "../../index.scss";

const Anime = ({id, name, src, nameOriginal, anio, director, description}) =>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div className="container">
          <Card key={id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={src} />
          <Card.Body>
            <Card.Title> Titulo: {name}</Card.Title>
            <Card.Text>
              Titulo Original: {nameOriginal}
            </Card.Text>
            <Card.Text>
              Año: {anio}
            </Card.Text>
            <Card.Text>
              Director: {director}
            </Card.Text>
            <Button variant="primary" onClick={handleShow}>
              Descripción
            </Button>
          </Card.Body>
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Description</Modal.Title>
          </Modal.Header>
          <Modal.Body>{description}</Modal.Body>
          <Card.Img variant="top" src={src} />
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
                </Modal>
                </Card>
        </div>


      
    )
}

      

export { Anime };

{/* 
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card> */}