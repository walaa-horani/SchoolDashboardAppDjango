import React, { useState } from 'react'

function Register() {
    const [form,setForm] = useState({
        username:"",
        password:"",
    })

    const [message, setMessage] = useState("");


    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
          {/* form */}

       <div className='flex-1 flex items-center justify-center bg-gray-50 p-8'>
        
        <div className='w-full max-w-md bg-white shadow-lg rounded-lg p-6'>

         <h3 className=" mb-6 text-center">
            Create Account
        </h3>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

          <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              className="border p-3 rounded focus:ring focus:ring-blue-300"
              required
            />  

         <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="border p-3 rounded focus:ring focus:ring-blue-300"
              required
        />    

         <button
              type="submit"
              className="text-white py-3 rounded-lg"
            >
              Register
            </button>

        </form>
        </div>
        
        </div>   

          
    </div>
  )
}

export default Register