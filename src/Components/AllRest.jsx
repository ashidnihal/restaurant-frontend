import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Restcard from './Restcard'
function AllRest() {

  // 1.Create a base_url
  const base_url='https://restuarantbackend.onrender.com/restaurants'

  
  // 2.state creation for holding array data

  const [restData,setData]=useState([])

  // 2.create a function for fetching

  const fetchData= async()=>{
    const response = await axios.get(base_url);
    console.log(response.data);
    setData(response.data)
  }
  // 3.create useEffect for calling function
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div><Restcard product={restData}/></div>
  )
}

export default AllRest