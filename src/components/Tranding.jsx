import React, { useEffect, useState } from "react";

const Tranding = () => {
  const url =
    "https://newsapi.org/v2/top-headlines?q=trump&apiKey=a3db542fdb2d476e954bcf495e4a50fd";

  const [trending, setTrending] = useState([]);

  const fetchData = async () => {
    const data = await fetch(url);
    const res = await data.json();
    setTrending(res.articles || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-6">
      

      {trending.length === 0 ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        trending.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-4 mb-4 shadow-sm hover:bg-gray-50 transition"
          >
            {/* Image + Title */}
            <div className="flex gap-3">
              <img
                src={item.urlToImage || "https://via.placeholder.com/80"}
                alt=""
                className="w-20 h-20 object-cover rounded-lg"
              />

              <div>
                <h2 className="font-semibold text-gray-900">
                  {item.title?.slice(0, 90)}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {item.author || "Unknown Author"}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-sm mt-3">
              {item.description?.slice(0, 120) + "..."}
            </p>

            {/* Link */}
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 text-sm mt-3 inline-block font-medium"
            >
              Read more →
            </a>
          </div>
        ))
      )}
    </div>
  );
};

export default Tranding;
