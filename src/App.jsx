// App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import News from "./components/News";
import Tranding from "./components/Tranding";
import { RiFindReplaceLine } from "react-icons/ri";

function App() {
  

  return (
    <BrowserRouter>      
      <div className="w-full bg-white shadow fixed top-0 left-0 z-50 px-10 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-500">NewsX</h1>
        <div className="w-[60%] flex items-center justify-center">
  <input
    type="text"
    placeholder="Search news..."
    className="border border-[#a1a1a1] w-2/3 p-2 rounded-2xl bg-gray-200 px-3 focus:outline-none"
  />
  <span className="text-2xl bg-gray-400 p-2 rounded-2xl ml-2 cursor-pointer">
    <RiFindReplaceLine />
  </span>
</div>

        <div className="flex gap-3 text-gray-600 font-medium">
          <Link to="/">Home</Link>
          <Link to="/Technology">Tech</Link>
          <Link to="/Sports">Sports</Link>
          <Link to="/Entertainment">Entertainment</Link>
          
        </div>
      </div>

      
      <div className="flex pt-20 max-w-7xl mx-auto">

        
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

        
        <div className="w-90 h-screen sticky top-20 p-4 border-l border-gray-200 hidden md:block overflow-auto">
          <h1 className="text-2xl font-bold mb-4">Trending News</h1>

          <div className="bg-gray-100 rounded-xl p-4 shadow-sm overflow-auto">
            <Tranding/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
