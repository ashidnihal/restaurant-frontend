import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Restcard({ product }) {
  console.log(product);

  return (
    <div>
      <div className="row">
        {product.map((item) => (
          <div className="col m-5" >
            <Link to={`/view/${item.id}`} style={{textDecoration:'none'}}>
            <Card style={{ width: '19rem',height:"340px" } }>
              <Card.Img variant="top" src={item.photograph} height={'230px'}alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                {item.address}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restcard;
