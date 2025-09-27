import React, { useState } from 'react'
import { useAuth } from '../auth/AuthContext'
import { useNavigate } from 'react-router-dom'

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
    <div>Testimonial</div>
  )
}

export default Testimonial