import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
/*import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";*/
import "./Anime.scss"

const Pokemon = ({id, name, src,nameOriginal }) =>{
    return (
        <Card key={id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={src} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {nameOriginal}
          </Card.Text>
          <Button variant="primary">Gritar!</Button>
        </Card.Body>
      </Card>
    )
}

export {Pokemon};