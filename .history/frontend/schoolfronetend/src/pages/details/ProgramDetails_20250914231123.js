import { DollarSign } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProgramDetails() {

    
    const {id} = useParams()

  const [program, setProgram] = useState(null)
    const [loading , setLoading] = useState(true)


     useEffect(()=>{
                fetch(`http://127.0.0.1:8000/programs/${id}`)
                .then((res) => {
                console.log("📡 Response status:", res.status);
                if (!res.ok) {
                  throw new Error(`❌ Server error: ${res.status}`);
                }
                return res.json();
              })
                .then((data)=>{
                    console.log("✅ programs data:", data);
                    setProgram(data)
                  
        
                })
                .catch((err)=>{
                    console.error("Error fetching programs:", err);
                }).finally(()=>{
                    setLoading(false)
                })
            },[id])


     if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-600 animate-pulse">Loading program...</p>
      </div>
    );
  }        
  return (
    <div className='max-w-5xl mx-auto p-6 mt-10'>

        <div className='bg-white shadow-lg rounded-xl overflow-hidden'>

        </div>
        <img src={program.image}  className='w-full h-72 object-cover' />

         {/* Content */}


         <div className='p-6 space-y-4'>
          <h1 className="text-3xl font-bold text-[#b04ba2]">{program.title}</h1>
          <p className="text-gray-600 leading-relaxed">{program.description}</p>
         </div>


           {/* Info cards */}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
            <div className='flex items-center gap-3 p-4 bg-violet-50 rounded-lg'>

                <DollarSign/>
                <div>

             <p className="text-sm text-gray-500">Price</p>
             <p className="font-semibold">${program.price}</p>
                </div>
                
            </div>
        </div>   



    </div>
  )
}

export default ProgramDetails