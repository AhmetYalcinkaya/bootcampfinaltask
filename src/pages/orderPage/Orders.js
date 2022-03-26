import "./cart.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteProduct, deleteAllProduct } from "../../redux/CartSlice";

const Orders = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const clearall = () => {
    dispatch(deleteAllProduct());
  };

  return (
    <div className="cart">
      <div className="cartwrapper">
        <h1 className="carttitle">YOUR BAG</h1>
        <div className="top">
          <Link to="/">
            <button className="topbutton">CONTINUE SHOPPING</button>
          </Link>
          <div className="toptexts">
            <span className="toptext">Shopping Bag({cart.quantity})</span>
            <button onClick={clearall} className="clear">
              Clear All
            </button>
          </div>
          <button className="topbutton">ORDER NOW</button>
        </div>
        <div className="bottom">
          <div className="bottominfo">
            {cart.products.map((product, key) => (
              <div className="pro" key={key}>
                <div className="producttail">
                  <img className="bottomimg" src={product.image} alt="" />
                  <div className="details">
                    <span className="proname">
                      <b>Product:</b> {product.title}
                    </span>

                    <div className="prosize">
                      <div className="amount">
                        <input
                          disabled
                          type="number"
                          className="input"
                          value={product.quantity}
                        />
                      </div>
                      <button className="addbutton">ADD TO CART</button>
                    </div>
                  </div>
                  <div className="price">
                    <div className="proprice">
                      $ {product.price * product.quantity}
                    </div>
                  </div>
                  <button
                    onClick={() => dispatch(deleteProduct(product))}
                    className="delete"
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="summary">
            <h1 className="summarytitle">ORDER SUMMARY</h1>

            <div className="summaryitem">
              <span className="summarytext">Total Discount</span>
              <span className="summaryprice">
                $ {cart.totalPrice.toFixed(2)}
              </span>
            </div>
            <button className="summarybutton">ORDER NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
