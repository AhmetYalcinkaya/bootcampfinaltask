import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseService } from "../network/services/baseService";

const Categories = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const data = await baseService.get("/products/categories");
      setCategoryList(data);
    } catch (error) {
      console.log("Get category error", error);
    }
  };
  return (
    <div className="category">
      {categoryList.map((category, key) => (
        <div key={key} className="card" style={{ width: "18rem" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4u3JvntPheaMYhE3kT9DErxXjB5QFgwLKRQ&usqp=CAU"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{category.toUpperCase()}</h5>

            <Link to={`/productlist/${category}`}>
              <button className="addbutton">Go to Category</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
