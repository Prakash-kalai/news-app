import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const News = ({ category }) => {
  const [articles, setArticles] = useState([]);

  const loadNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?apiKey=a3db542fdb2d476e954bcf495e4a50fd&country=us&category=${category}`;
    const response = await fetch(url);
    const data = await response.json();             
    setArticles(data.articles || []);
  };

  useEffect(() => {
    loadNews();
  }, [category]);

  return (
    <div className="max-w-3xl mx-auto my-6">
      {articles.map((item, index) => (
        <NewsItem
          key={index}
          title={item.title}
          description={item.description}
          urlToImage={item.urlToImage}
          url={item.url}
          author={item.author}
          publishedAt={item.publishedAt}
        />
      ))}
    </div>
  );
};

export default News;
