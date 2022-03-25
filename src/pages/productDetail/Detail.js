import { useEffect, useState } from "react";
import "./singleproduct.css";
import { useParams } from "react-router-dom";
import { baseService } from "../../network/services/baseService";

const Detail = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    try {
      const data = await baseService.get(`/products/${id}`);
      setDetail(data);
    } catch (error) {
      console.log("Get detail error", error);
    }
  };

  return (
    <>
      <div className="productspage">
        <div className="productwrapper">
          <div className="productimage">
            <img className="proimg" src={detail.image} alt="" />
          </div>
          <div className="productinfo">
            <h1 className="protitle">{detail.title}</h1>
            <p className="prodesc">{detail.description}</p>
            <span className="prize">{detail.price}</span>
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
