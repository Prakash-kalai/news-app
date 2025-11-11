// App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import News from "./components/News";
import { getP } from "./https/api";

function App() {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const data = await getP();
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <BrowserRouter>
      {/* HEADER */}
      <div className="w-full bg-white shadow fixed top-0 left-0 z-50 px-6 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-500">NewsX</h1>

        <div className="flex gap-6 text-gray-600 font-medium">
          <Link to="/">Home</Link>
          <Link to="/Technology">Tech</Link>
          <Link to="/Sports">Sports</Link>
          <Link to="/Entertainment">Entertainment</Link>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex pt-20 max-w-6xl mx-auto">

        {/* LEFT SIDEBAR */}
        <div className="w-64 h-screen sticky top-20 border-r border-gray-200 p-4">
          <h2 className="font-bold text-lg mb-4 text-gray-800">Categories</h2>

          <ul className="space-y-3 text-gray-700">
            <li><Link className="hover:text-blue-500" to="/">General</Link></li>
            <li><Link className="hover:text-blue-500" to="/Entertainment">Entertainment</Link></li>
            <li><Link className="hover:text-blue-500" to="/Technology">Technology</Link></li>
            <li><Link className="hover:text-blue-500" to="/Sports">Sports</Link></li>
            <li><Link className="hover:text-blue-500" to="/Business">Business</Link></li>
            <li><Link className="hover:text-blue-500" to="/Health">Health</Link></li>
            <li><Link className="hover:text-blue-500" to="/Science">Science</Link></li>
          </ul>
        </div>

        {/* CENTER CONTENT (NEWS FEED) */}
        <div className="flex-1 px-6">
          <Routes>
            <Route path="/" element={<News key="general" category="general" />} />
            <Route path="/Entertainment" element={<News key="entertainment" category="entertainment" />} />
            <Route path="/Technology" element={<News key="technology" category="technology" />} />
            <Route path="/Sports" element={<News key="sports" category="sports" />} />
            <Route path="/Business" element={<News key="business" category="business" />} />
            <Route path="/Health" element={<News key="health" category="health" />} />
            <Route path="/Science" element={<News key="science" category="science" />} />
          </Routes>
        </div>

        {/* RIGHT SIDEBAR (Optional Trending) */}
        <div className="w-72 h-screen sticky top-20 p-4 border-l border-gray-200 hidden md:block">
          <h2 className="font-bold text-lg text-gray-800 mb-4">Trending</h2>

          <div className="bg-gray-100 rounded-xl p-4 shadow-sm">
            <p className="font-medium">Coming Soon...</p>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
