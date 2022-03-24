import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="cart">
      <div className="cartwrapper">
        <h1 className="carttitle">YOUR BAG</h1>
        <div className="top">
          <Link to="/">
            <button className="topbutton">CONTINUE SHOPPING</button>
          </Link>
          <div className="toptexts">
            <span className="toptext">Shopping Bag(2)</span>
            <button className="clear"> Clear All</button>
          </div>
          <button className="topbutton">ORDER NOW</button>
        </div>
        <div className="bottom">
          <div className="bottominfo">
            <div className="pro">
              <div className="producttail">
                <img
                  className="bottomimg"
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt=""
                />
                <div className="details">
                  <span className="proname">
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span className="proid">
                    <b>ID:</b> 93813718293
                  </span>

                  <div className="prosize">
                    <div className="amount">
                      <input type="number" className="input" />
                    </div>
                    <button className="addbutton">ADD TO CART</button>
                  </div>
                </div>
                <div className="price">
                  <div className="proprice">$ 30</div>
                </div>
                <button className="delete">
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="summary">
            <h1 className="summarytitle">ORDER SUMMARY</h1>

            <div className="summaryitem">
              <span className="summarytext">Total Discount</span>
              <span className="summaryprice">$ 60</span>
            </div>
            <button className="summarybutton">ORDER NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
