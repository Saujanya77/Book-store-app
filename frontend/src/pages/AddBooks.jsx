import React from 'react'

const AddBooks = () => {
    return (
        <div className='bg-dark d-flex justify-content-center align-items-center' style={{ minHeight: "91.5vh" }}>
            <div className='container p-4'>
                <div className="mb-3">
                    <label
                        for="exampleFormControlInput1"
                        className="form-label text-white">

                        Book Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Book Name" />
                </div>
                <div className="mb-3">
                    <label
                        for="exampleFormControlInput1"
                        className="form-label text-white">

                        Author Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter The Name Of The Author" />
                </div>
                <div className="mb-3">
                    <label
                        for="exampleFormControlInput1"
                        className="form-label text-white">

                        Description</label>
                    <textarea type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Description Of The Book" />
                </div>
                <div className="mb-3">
                    <label
                        for="exampleFormControlInput1"
                        className="form-label text-white">

                        Image</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter The URL Of The Book Cover" />
                </div>
                <div className="mb-3">
                    <label
                        for="exampleFormControlInput1"
                        className="form-label text-white">

                        Price</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter The Price Of The Book" />
                </div>
                <button type="button" className="btn btn-outline-success ">Submit</button>
            </div>
        </div>
    )
}

export default AddBooks