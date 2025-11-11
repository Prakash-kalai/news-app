const NewsItem = ({ title, description, urlToImage, url, author, publishedAt }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4 hover:bg-gray-50 transition">
      
      <div className="flex items-center gap-2 mb-2">
        <img
          src={urlToImage || "https://via.placeholder.com/50"}
          alt="news"
          className="w-12 h-12 rounded-lg object-cover"
        />
        <div>
          <h2 className="font-semibold text-gray-900 leading-tight">
            {title.length > 80 ? title.slice(0, 80) + "..." : title}
          </h2>
          <p className="text-sm text-gray-500">
            {author || "Unknown"} · {new Date(publishedAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      
      <p className="text-gray-700 text-sm mb-3">
        {description ? description.slice(0, 120) + "..." : ""}
      </p>

      
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="text-blue-500 font-medium text-sm hover:underline"
      >
        Read more →
      </a>
    </div>
  );
};

export default NewsItem;
