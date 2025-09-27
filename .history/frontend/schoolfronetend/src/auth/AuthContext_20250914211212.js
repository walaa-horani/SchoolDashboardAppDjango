import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({children}){

    const [token , setToken] = useState(localStorage.getItem("token"))

    const [role , setRole] = useState(localStorage.getItem("role"))


    useEffect(()=>{
        if(token){
            fetch("http://127.0.0.1:8000/profiles/",{
                headers: {Authorization: `Token ${token}`}
            })

             .then((res)=>res.json())
      .then((data)=>{
        if (Array.isArray(data) && data.length > 0) {
          localStorage.setItem("role", data[0].role);
        }
      })

     .catch((err) => console.error("Error fetching profile:", err));
            
        }
    },[token])
}
