import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { baseService } from "../../network/services/baseService";

const ProductList = () => {
  const [productsList, setProductsList] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    getCategoriesProducts();
  }, []);

  const getCategoriesProducts = async () => {
    try {
      const data = await baseService.get(`/products/category/${title}`);
      setProductsList(data);
    } catch (error) {
      console.log("Get productsList error", error);
    }
  };
  return (
    <>
      <div className="products">
        {productsList.map((product, key) => (
          <div key={key} className="card" style={{ width: "18rem" }}>
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
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
    </>
  );
};

export default ProductList;
