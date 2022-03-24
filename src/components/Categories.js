import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="category">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4u3JvntPheaMYhE3kT9DErxXjB5QFgwLKRQ&usqp=CAU"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Electronics</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/productlist" className="btn btn-primary">
            Go to Category
          </Link>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShTC0QBTm1oHGKPVDB0nw83jZee66vpCVNrg&usqp=CAU"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Electronics</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/productlist" className="btn btn-primary">
            Go to Category
          </Link>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShTC0QBTm1oHGKPVDB0nw83jZee66vpCVNrg&usqp=CAU"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Electronics</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/productlist" className="btn btn-primary">
            Go to Category
          </Link>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShTC0QBTm1oHGKPVDB0nw83jZee66vpCVNrg&usqp=CAU"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Electronics</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/productlist" className="btn btn-primary">
            Go to Category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
