import {useState} from "react"
import BackButton from "../components/BackButton";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const CreateItem= () =>{
    const[name,setName]=useState('');
    const[quantity,setQuantity]=useState('');
    const[category,setCategory]=useState('');
    const[price,setPrice]=useState('');
    const[value,setValue]=useState('');
    const navigate=useNavigate();
    const handleSaveItem = () => {
        const data ={
            name,
            quantity,
            category,
            price,
            value,
        };
        axios
             .post('http://localhost:3006/items',data)
             .then(() => {
                navigate('/items');
             })
             .catch((error) =>{
                alert('An error happened.Please Check console');
                console.log(error);
             });
    };
    return (
        <div className="p-4"style={{ marginLeft: '400px' }}>
            <BackButton/>
            <h1 className="text-3xl my-4" >CreateItem</h1>
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className="my-4">
                    <label className="text-x1 mr-4 text-gray-500">Name</label>
                    <input
                      type='text'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                    <label className="text-x1 mr-4 text-gray-500">Quantity</label>
                    <input
                      type='number'
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                    <label className="text-x1 mr-4 text-gray-500">Category</label>
                    <input
                      type='text'
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                    <label className="text-x1 mr-4 text-gray-500">Price</label>
                    <input
                      type='number'
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                    <label className="text-x1 mr-4 text-gray-500">Value</label>
                    <input
                      type='number'
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <button className="p-2 bg-sky-300 m-8" onClick={handleSaveItem}>Save</button>
            </div>
        </div>
    )
}
export default CreateItem;