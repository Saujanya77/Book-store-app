import React from 'react'

const BookSection = ({data}) => {
    console.log(data);
  return (
    
    <div className='d-flex justify-content-around align-items-center my-3 flex-wrap'>
        {data && data.map((item,index)=>(
            <div className='' style={{width:"200px",height:"320px", backgroundColor: "aqua"}}>
                <div><img style={{width:"200px",height:"230px"}} className='img-fluid' src={item.url} alt='/'></img></div>
                <h5 style={{fontSize:"15px"}} className=' px-2 ' m-0>{item.bookname.slice(0,50)}</h5>
                <p style={{fontSize: "20px"}} className='m-0 px-2'>Rs. {item.price}</p>
            </div>
        ))}
    </div>
    
  )
}

export default BookSection