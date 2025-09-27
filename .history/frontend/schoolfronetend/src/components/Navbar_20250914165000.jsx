import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://127.0.0.1:8000/profiles/", {
        headers: {
          "Authorization": `Token ${token}`
        }
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Profile data:", data);
          // إذا API بيرجع قائمة، خد أول عنصر
          if (Array.isArray(data) && data.length > 0) {
            setRole(data[0].role);
          }
        })
        .catch((err) => console.error("Error fetching profile:", err));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setRole(null);
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center p-4 shadow bg-white">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/programs">Programs</Link>
        {role === "student" && <Link to="/grades">My Grades</Link>}
      </div>

      <div className="flex gap-4">
        {!localStorage.getItem("token") ? (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="text-red-500 font-semibold"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
