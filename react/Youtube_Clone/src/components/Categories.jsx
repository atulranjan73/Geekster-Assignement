import React from "react";

function Categories() {
  const categoryList = [
    "All",
    "Music",
    "Gaming",
    "News",
    "Live",
    "Sports",
    "Movies",
    "Technology",
    "Education",
    "Health",
    "Fashion",
    "Travel",
    "Food",
    "Comedy",
    "DIY",
    "Vlogs",
    "Animation",
    "Podcasts",
    "Fitness",
    "Art",
    "Science",
    "Nature",
    "History",
    "Finance",
    "Photography",
    "Business",
    "Programming",
    "Automobile",
    "Adventure",
    "Spirituality",
  ];

  return (
    <div className="categories">
      <div className="category-wrapper">
        {categoryList.map((category, index) => (
          <button
            className={`category ${index === 0 ? "active" : ""}`}
            key={index}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;
