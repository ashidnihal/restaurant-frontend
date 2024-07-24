import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import ListGroup from 'react-bootstrap/ListGroup';
function Restreview({rv}) {
    console.log(rv);
    const [open, setOpen] = useState(false);
  return (
    
    <div> 
        <Button
    onClick={() => setOpen(!open)}
    aria-controls="example-collapse-text"
    aria-expanded={open}
  >
    Review
  </Button>
  <Collapse in={open}>
    <div id="example-collapse-text">
    {rv?.map((item, index) => (
    <div key={index}>
     
       <ListGroup className='my-3 border border-light'>
      <ListGroup.Item>Name: {item.name}</ListGroup.Item>
      <ListGroup.Item>Date: {item.date}</ListGroup.Item>
      <ListGroup.Item>Rating: {item.rating}</ListGroup.Item>
      <ListGroup.Item>Comments: {item.comments}</ListGroup.Item>
      
    </ListGroup>
    </div>
))}
    </div>
  </Collapse>
  </div>
  )
}

export default Restreview