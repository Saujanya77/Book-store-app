import React from 'react';
import './Home.css';


const Home = () => {
    const image=require("../images/img1.jpg");
    return (
        <div className="Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center">
            <div className="row container">
                <div className="col-lg-6 d-flex justify-content-center  align-items-start flex-column" style={{ height: "91.5vh" }}>
                    <h2 style={{fontSize:"70px"}}>BOOK STORE FOR YOU!</h2>
                    <button className="viewBook my-3">View Books</button>
                </div>
                <div className="col-lg-6 d-flex justify-content-center align-items-end flex-column" style={{ height: "91.5vh" }}>
                    <img src={image} alt='/' style={{ width: "80%", height: "90%" }} />
                </div>
            </div>
        </div>
    );
}

export default Home;
