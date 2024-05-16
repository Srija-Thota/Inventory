import { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3006/auth/signup", {
      username,
      email,
      password,
    }).then(response => {
        if(response.data.status) {
            navigate('/login')
        }
    }).catch(err => {
        console.log(err)
    })
  };
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div style={{ marginLeft: '150px' }}>
      <form className="bg-white p-8 rounded-lg shadow-md space-y-4 sign-up-form" onSubmit={handleSubmit}>
        <h2 className="text-yellow-700 text-3xl font-bold">Sign Up</h2>
        <label htmlFor="username" className="text-gray-700">Username:</label>
        <input
          type="text"
          placeholder="Username"
          className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="email" className="text-gray-700">Email:</label>
        <input
          type="email"
          autoComplete="off"
          placeholder="Email"
          className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" className="text-gray-700">Password:</label>
        <input
          type="password"
          placeholder="******"
          className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="w-full bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700 focus:outline-none focus:bg-yellow-700">Sign Up</button>
        <p className="text-gray-700">Have an Account? <Link to="/login" className="text-yellow-600">Login</Link></p> 
      </form>
      </div>
    </div>
  );
};

export default Signup;
