import React,{useState, useEffect} from "react"
import BackButton from "../components/BackButton";
import axios from "axios";
import {useNavigate,useParams} from 'react-router-dom';


const DeleteItem= () =>{
    const navigate=useNavigate();
    const {id}=useParams();

    const handleDeleteItem = () =>{
        axios.delete(`http://localhost:3006/items/${id}`)
             .then(()=>{
                navigate('/items');
             })
             .catch((error) =>{
                alert('An error happened.Please Check console');
                console.log(error);
             })
    }
    return (
        <div className="p-4"style={{ marginLeft: '400px' }}>
            <BackButton/>
            <h1 className="text-3xl my-4">Delete Item</h1>
            <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
                <h3 className='text-2xl'>Are you sure you want to delete the item?</h3>
                <button 
                   className="p-4 bg-red-600 text-white m-8 w-full"
                   onClick={handleDeleteItem}>
                    Yes,Delete it
                   </button>
            </div>
        </div>
    )
}
export default DeleteItem;