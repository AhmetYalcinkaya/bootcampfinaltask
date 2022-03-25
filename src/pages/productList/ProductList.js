import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { baseService } from "../../network/services/baseService";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/CartSlice";

const ProductList = () => {
  const [productsList, setProductsList] = useState([]);
  const { title } = useParams();
  const [quanty, setQuanty] = useState(1);
  const dispatch = useDispatch();

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

  const handleClick = () => {
    dispatch(addProduct({ product: productsList, quantity: quanty }));
  };

  return (
    <>
      <div className="products">
        {productsList.map((product, key) => (
          <div key={key} className="card" style={{ width: "18rem" }}>
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">
                {product.description.substring(0, 150)}...
              </p>
              <div className="addcontainer">
                <Link to={`/products/${product.id}`}>
                  <button className="addbutton">Go to Detail</button>
                </Link>

                <div className="amount">
                  <input
                    onChange={(e) => {
                      setQuanty(e.target.value);
                    }}
                    type="number"
                    className="input"
                  />
                </div>
                <button onClick={handleClick} className="addbutton">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
