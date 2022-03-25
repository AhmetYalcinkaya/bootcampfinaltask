import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseService } from "../network/services/baseService";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const data = await baseService.get("/products?limit=10");
      setProducts(data);
    } catch (error) {
      console.log("Get products error", error);
    }
  };

  return (
    <div className="products">
      {products.map((product, key) => (
        <div key={key} className="card" style={{ width: "18rem" }}>
          <img src={product.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.title.substring(0, 40)}</h5>
            <p className="card-text">
              {product.description.substring(0, 150)}...
            </p>
            <div className="addcontainer">
              <Link to={`/products/${product.id}`}>
                <button className="addbutton">Go to Detail</button>
              </Link>

              <div className="amount">
                <input type="number" className="input" />
              </div>
              <button className="addbutton">ADD TO CART</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
