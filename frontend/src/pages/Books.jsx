import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Books = () => {
  useEffect(() => {
    const fetch=async()=>{
      await axios
      .get("http://localhost:1000/api/vi/getBooks")
      .then((res)=>console.log(res));

    };
    fetch();
  })
  
  return (
    <div className='bg-dark' style={{minHeight:"91.5vh"}}>
      <div className='d-flex justify-content-center align-items-center py-3'><h4 className='text-white'>Books Section</h4></div>
    </div>
  )
}

export default Books