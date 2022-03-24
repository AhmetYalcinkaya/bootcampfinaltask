import React from "react";
import "./singleproduct.css";

const Detail = () => {
  return (
    <>
      <div className="productspage">
        <div className="productwrapper">
          <div className="productimage">
            <img
              className="proimg"
              src="https://i.ibb.co/S6qMxwr/jean.jpg"
              alt=""
            />
          </div>
          <div className="productinfo">
            <h1 className="protitle">Denim Jumpsuit</h1>
            <p className="prodesc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
              iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
              tristique tortor pretium ut. Curabitur elit justo, consequat id
              condimentum ac, volutpat ornare.
            </p>
            <span className="prize">$ 20</span>
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
                <input type="number" className="input" />
              </div>
              <button className="addbutton">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
