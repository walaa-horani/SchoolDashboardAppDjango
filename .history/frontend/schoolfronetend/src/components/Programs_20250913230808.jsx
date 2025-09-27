import React, { useEffect, useState } from "react";

function Programs() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("🔄 Fetching programs..."); // ✅ للتأكد أنو ال useEffect عم يشتغل

    fetch("http://127.0.0.1:8000/programs/") // عدل الرابط إذا API مختلف
      .then((res) => {
        console.log("📡 Response status:", res.status);
        if (!res.ok) {
          throw new Error(`❌ Server error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("✅ Programs data:", data); // ✅ عرض البيانات بالكونسول
        setPrograms(data);
      })
      .catch((err) => {
        console.error("⚠️ Fetch error:", err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-5 mt-16">
      <h1 className="text-3xl font-bold text-center mb-8">Our Programs</h1>

      {/* ✅ حالة التحميل */}
      {loading && <p className="text-center">Loading programs...</p>}

      {/* ✅ حالة الخطأ */}
      {error && (
        <p className="text-center text-red-600 font-semibold">
          Error: {error}
        </p>
      )}

      {/* ✅ حالة النجاح */}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{program.title}</h2>
                <p className="text-gray-600 text-sm mb-4">
                  {program.description}
                </p>
                <p className="text-gray-800 font-bold mb-2">
                  Price: ${program.price}
                </p>
                <p className="text-gray-500 text-sm">
                  Lessons: {program.lessons} | Hours: {program.hours}
                </p>
                <button className="mt-4 w-full bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Programs;
