import "./costumer.css";
import { orderService } from "../../network/services/orderService";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CostumerOrders = () => {
  const [orders, setOrders] = useState([]);

  const local = localStorage.getItem("customerID");

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    try {
      const data = await orderService.get("/orders");
      const filtered = data.filter((item) => item.costumerID === local);
      console.log(filtered);
      setOrders(filtered);
    } catch (error) {
      console.log("Get orders error", error);
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
        </div>
        <div className="bottom">
          <div className="bottominfo">
            {orders.quantity === 0 ? (
              <h2>Your Cart is Empty</h2>
            ) : (
              orders.map((product, key) => (
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
                      </div>
                    </div>
                    <div className="price">
                      <div className="proprice">
                        $ {product.price * product.quantity}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostumerOrders;
