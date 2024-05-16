import  { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const ShowItem = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3006/items')
            .then((res) => {
                setItems(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="p-4">
            <div className="ml-3" style={{ marginLeft: '230px' }}>
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl my-8">Items List</h1>
                    <Link to='/items/create'>
                        <MdOutlineAddBox className="text-sky-800 text-4xl" />
                    </Link>
                </div>

                <div className="ml-custom"> {/* Custom margin left value */}
                    <table className="w-full border-separate border-spacing-2">
                        <thead>
                            <th className="border border-slate-600 rounded-md w-10 ">No</th>
                            <th className="border border-slate-600 rounded-md w-40">Name</th>
                            <th className="border border-slate-600 rounded-md w-40">Quantity</th>
                            <th className="border border-slate-600 rounded-md max-md:hidden w-40">Category</th>
                            <th className="border border-slate-600 rounded-md w-40">Price</th>
                            <th className="border border-slate-600 rounded-md w-40">Value</th> {/* Adjusted width */}
                            <th className="border border-slate-600 rounded-md w-40">Actions</th>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={item._id} className="h-8">
                                    <td className="border border-slate-700 rounded-md text-center">
                                        {index + 1}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center">
                                        {item.name}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                                        {item.quantity}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                                        {item.category}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center">
                                        {item.price}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center">
                                        {item.value}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center">
                                        <div className="flex justify-center gap-x-4">
                                            <Link to={`/items/edit/${item._id}`}>
                                                <AiOutlineEdit className='text-2xl text-yellow-800' />
                                            </Link>
                                            <Link to={`/items/delete/${item._id}`}>
                                                <MdOutlineDelete className='text-2xl text-red-800' />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ShowItem;
