import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  console.log(item);
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {/* {item?.attributes.isNew && <span>New Season</span>} */}
          <span>New Season</span>
          <img
            // src={
            //   process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url
            // }
            src ={item.img}
            alt=""
            className="mainImg"
          />
          <img
            // src={
            //   process.env.REACT_APP_UPLOAD_URL + item.attributes?.img2?.data?.attributes?.url
            // }
            src = {item.img2}
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice}</h3>
          <h3>${item.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
