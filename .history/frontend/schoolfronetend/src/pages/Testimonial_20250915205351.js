import React, { useState } from "react";
import { useAuth } from "../auth/AuthContext";

function TestimonialForm() {
  const { token } = useAuth();
  const [form, setForm] = useState({
    comment: "",
    rating: 5,
  });
  const [message, setMessage] = useState("");

  // تغيير قيمة الـ rating عند اختيار النجمة
  const handleRatingChange = (val) => {
    setForm({ ...form, rating: val });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      setMessage("❌ You must be logged in to add a testimonial.");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:8000/testimonials/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error("❌ Failed to submit testimonial");
      }

      setMessage("✅ Testimonial submitted successfully!");
      setForm({ comment: "", rating: 5 });
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow p-6 rounded">
      <h2 className="text-xl font-bold text-[#b04ba2] mb-4">Add Testimonial</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Comment */}


        
        <textarea
          name="comment"
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
          placeholder="Write your testimonial..."
          className="border rounded p-3 focus:ring focus:ring-[#b04ba2]"
          required
        />

        {/* Rating as Stars */}
        <div className="flex gap-2 text-2xl">
          {[1, 2, 3, 4, 5].map((val) => (
            <span
              key={val}
              onClick={() => handleRatingChange(val)}
              className={`cursor-pointer transition ${
                val <= form.rating ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#b04ba2] text-white py-2 px-4 rounded hover:bg-[#93318c] transition"
        >
          Submit
        </button>
      </form>

      {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
    </div>
  );
}

export default TestimonialForm;
