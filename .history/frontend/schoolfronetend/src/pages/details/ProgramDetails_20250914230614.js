import React from 'react'

function ProgramDetails() {

    
    const {id} = useParams()

  const [program, setProgram] = useState(null);
    const [loading , setLoading] = useState(true)
  return (
    <div>ProgramDetails</div>
  )
}

export default ProgramDetails