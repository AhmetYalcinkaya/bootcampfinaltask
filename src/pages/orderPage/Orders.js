import "./cart.css";
import { orderService } from "../../network/services/orderService";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteProduct, deleteAllProduct } from "../../redux/CartSlice";

const Orders = () => {
  localStorage.setItem("customerID", "Ahmet");

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const clearall = () => {
    dispatch(deleteAllProduct());
  };
  console.log(cart);
  const addOrder = async () => {
    try {
      if (cart.quantity !== 0) {
        await orderService.post("/orders", cart);
        alert("Order Placed");
      } else {
        alert("Cart is empty");
      }
    } catch (error) {
      console.log("Order add error", error);
    }
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
          <button onClick={addOrder} className="topbutton">
            ORDER NOW
          </button>
        </div>
        <div className="bottom">
          <div className="bottominfo">
            {cart.quantity === 0 ? (
              <h2>Your Cart is Empty</h2>
            ) : (
              cart.products.map((product, key) => (
                <div className="pro" key={key}>
                  <div className="producttail">
                    <img
                      className="bottomimg"
                      src="https://ap.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lvse-inside-out-t-shirt-ready-to-wear--HIY47WJYN513_PM2_Front%20view.jpg"
                      alt=""
                    />
                    <div className="details">
                      <span className="proname">
                        <b>Product:</b> {product.name}
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
                      </div>
                    </div>
                    <div className="price">
                      <div className="proprice">
                        $ {product.unitPrice * product.quantity}
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
              ))
            )}
          </div>
          <div className="summary">
            <h1 className="summarytitle">ORDER SUMMARY</h1>

            <div className="summaryitem">
              <span className="summarytext">Total Discount</span>
              <span className="summaryprice">
                $ {cart.totalPrice.toFixed(2)}
              </span>
            </div>
            <button onClick={addOrder} className="summarybutton">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
