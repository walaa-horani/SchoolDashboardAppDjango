import React, { useState } from 'react'
import { useAuth } from '../auth/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Star } from 'lucide-react';

function Testimonial() {

    const {token} = useAuth()
    const navigate = useNavigate()

    const [form,setForm] = useState({
        comment:"",
        rating:5
    }) 

    const [message, setMessage] = useState("");

    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(!token){
            setMessage("❌ You must be logged in to add a testimonial")
            return
        }

        try {
           const res = await fetch("http://127.0.0.1:8000/testimonials/",{
            method:"POST",
            headers: { 
           "Content-Type": "application/json",  
            Authorization: `Token ${token}`,
        },

        body:JSON.stringify(form)
           }) 

           const data = await res.json()

        if (!res.ok) {
        throw new Error("❌ Failed to submit testimonial");
      }

      setMessage(" Testimonial submitted successfully!")

      setForm({ comment:"",
        rating:5})

        navigate("/")




        } catch (error) {
          setMessage(error.message);

        }

    }
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
          {/* form */}

       <div className='flex-1 flex items-center justify-center bg-gray-50 p-8'>
        
        <div className='w-full max-w-md bg-white shadow-lg rounded-lg p-6'>

         <h3 className=" mb-6 text-center">
            Login
        </h3>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

  <textarea type="username"
  name="username"
  placeholder="username"
  value={form.email}
  onChange={handleChange}
   className="border p-3 rounded focus:ring focus:ring-blue-300"
     required>
  </textarea>


        <div className='flex gap-2 text-2xl'>
            
            {[1,2,3,4,5].map((val)=> (
                val <= form.rating ? (
               <Star  className="w-7 h-7 text-yellow-400 cursor-pointer transition" onClick={handleRatingChange}/>
                
            ):(
             <Star
                key={val}
                onClick={() => handleRatingChange(val)}
                className="w-7 h-7 text-yellow-400 cursor-pointer transition"
            />
      )
            ))}
         </div>   

         <button
              type="submit"
              className="text-white py-3 rounded-lg"
            >
              Login
            </button>

        </form>

        {message && (
            <p className='mt-4 text-center text-gray-700'>{message}</p>
        )}

        </div>
        
        </div>  

        <div className='flex-1 hidden md:flex'>
        
        <img className='w-full h-full object-cover' src='/testimonial.png'/>
        </div> 

          
    </div>
  )
}

export default Testimonial