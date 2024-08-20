import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/2005355/pexels-photo-2005355.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/1390602/pexels-photo-1390602.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/756570/pexels-photo-756570.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
          <img src={images[2]} alt="" onClick={(e) => setSelectedImg(2)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Co-ord Set</h1>
        <span className="price">$19.9</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          explicabo optio. Adipisci molestias ullam quo optio, delectus vitae
          commodi iure sint architecto sit ipsa a impedit dolorum rem
          consequuntur, voluptatem voluptatum dicta consequatur perspiciatis
          similique. Facilis aut sit architecto ullam cum natus quo debitis
          obcaecati. Adipisci, quae vel porro mollitia nobis repellendus vero.
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Zara</span>
          <span>Product Type: Suit</span>
          <span>Tag: Blazer, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
