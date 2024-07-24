import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop';
import Restreview from './Restreview';
function Viewrest() {
  // 1 get id from the params
    // const params = useParams()
    // console.log(params);
    // console.log(params.id);

    // destructuring
    const {id} = useParams()
    console.log(id);

    // 1. Create base_url
    const base_url='http://localhost:3001/restaurants'
    // 4.state creation for holding particular restuarant details
    const [viewRestData,setViewRestData]=useState({})
    // 2 view particular restuarant details:http://localhost:3000/restaurants/1
    const viewRestuarant=async()=>{
    const {data} = await axios.get(`${base_url}/${id}`)
      console.log(data);
      setViewRestData(data)
     
    }
    console.log(viewRestData);
    useEffect(()=>{
      viewRestuarant()},[]
    )
  return (
    <div>
      <Row>
        <Col className='p-5'>
        <img src={viewRestData.photograph} width={'300px'} alt="" srcset="" />
        </Col>
        <Col className='m-5 '>
        <h1>{viewRestData.name}</h1>
        <ListGroup variant="flush">
      <ListGroup.Item>Neighborhood : {viewRestData.neighborhood}</ListGroup.Item>
      <ListGroup.Item>Address: {viewRestData.address}</ListGroup.Item>
      <ListGroup.Item>Cuisine_type : {viewRestData.cuisine_type}</ListGroup.Item>
      <ListGroup.Item><Restop op={viewRestData.operating_hours}/></ListGroup.Item>
      <ListGroup.Item><Restreview rv={viewRestData.reviews} /></ListGroup.Item>
    </ListGroup>
        </Col>
      </Row>

    </div>
  )
}

export default Viewrest