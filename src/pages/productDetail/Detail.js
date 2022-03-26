import { useEffect, useState } from "react";
import "./singleproduct.css";
import { useParams } from "react-router-dom";
import { baseService } from "../../network/services/baseService";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/CartSlice";

const Detail = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    try {
      const data = await baseService.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log("Get detail error", error);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity }));
  };

  return (
    <>
      <div className="productspage">
        <div className="productwrapper">
          <div className="productimage">
            <img className="proimg" src={product.image} alt="" />
          </div>
          <div className="productinfo">
            <h1 className="protitle">{product.title}</h1>
            <p className="prodesc">{product.description}</p>
            <span className="prize">{product.price}</span>
            <div className="profiltercontainer">
              <div className="profilter">
                <span className="filtertext">Size</span>
                <select className="select">
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>XXL</option>
                </select>
              </div>
            </div>
            <div className="addcontainer">
              <div className="amount">
                <input
                  type="number"
                  className="input"
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                />
              </div>
              <button onClick={handleClick} className="addbutton">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
