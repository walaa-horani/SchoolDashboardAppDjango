import React from 'react'

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
                    setTeacher(data)
                  
        
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
    <div>ProgramDetails</div>
  )
}

export default ProgramDetails