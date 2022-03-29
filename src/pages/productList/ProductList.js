import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { baseService } from "../../network/services/baseService";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/CartSlice";

const ProductList = () => {
  const [productsList, setProductsList] = useState([]);
  const { id } = useParams();
  const [quanty, setQuanty] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    getCategoriesProducts();
  });

  const getCategoriesProducts = async () => {
    try {
      const data = await baseService.get(`/products`);
      const filtered = data.filter((product) => product.categoryId === +id);

      setProductsList(filtered);
    } catch (error) {
      console.log("Get productsList error", error);
    }
  };

  const handleClick = (product) => {
    dispatch(addProduct({ ...product, quantity: quanty }));
  };

  return (
    <>
      <div className="products">
        {productsList?.map((product, key) => (
          <div key={key} className="card" style={{ width: "18rem" }}>
            <img
              src="https://st-intersport.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/2210072469_o003-john-frank-cool-t-shirt-637690624938233321.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.supplier?.companyName}</p>
              <div className="addcontainer">
                <Link to={`/products/${product.id}`}>
                  <button className="addbutton">Go to Detail</button>
                </Link>

                <div className="amount">
                  <input
                    onChange={(e) => {
                      setQuanty(e.target.value);
                    }}
                    placeholder="1"
                    type="number"
                    className="input"
                  />
                </div>
                <button
                  onClick={() => handleClick(product)}
                  className="addbutton"
                >
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
