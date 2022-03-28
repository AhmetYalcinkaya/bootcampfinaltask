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
            {orders.length === 0 ? (
              <h2>Your Cart is Empty</h2>
            ) : (
              orders.map((product, key) => (
                <div key={key}>
                  {product.products.map((item, id) => (
                    <div className="pro" key={id}>
                      <div className="producttail">
                        <img
                          className="bottomimg"
                          src="https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/91F89859AE004153A24E7852F8666F0F/10093625_r.jpg?fit=inside|540:540"
                          alt=""
                        />
                        <div className="details">
                          <span className="proname">
                            <b>Product:</b> {item.name}
                          </span>

                          <div className="prosize">
                            <div className="amount">
                              <input
                                disabled
                                type="number"
                                className="input"
                                value={item.quantity}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="price">
                          <div className="proprice">
                            $ {(item.unitPrice * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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
