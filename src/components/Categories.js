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
      const data = await baseService.get("/categories");
      setCategoryList(data);
    } catch (error) {
      console.log("Get category error", error);
    }
  };
  return (
    <div className="category">
      {categoryList?.map((category, key) => (
        <div key={key} className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4u3JvntPheaMYhE3kT9DErxXjB5QFgwLKRQ&usqp=CAU"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{category.name}</h5>

            <Link to={`/productlist/${category.id}`}>
              <button className="addbutton">Go to Category</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
