import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow">
      <h1 className="font-bold text-lg">My School</h1>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/programs">Programs</Link>

        {!token ? (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        ) : (
          <>
            {role === "student" && <Link to="/grades">My Grades</Link>}
            <button onClick={handleLogout} className="text-red-600">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
