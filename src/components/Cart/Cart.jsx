import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus expedita, ducimus blanditiis cupiditate, eveniet corporis iste doloremque dolores magni fuga aperiam nulla similique veniam non? Natus tenetur molestias aliquam labore quisquam exercitationem maiores, adipisci ad, excepturi sed alias, aut unde. Repellat at quaerat ullam voluptates ratione, labore deserunt quod deleniti laudantium expedita suscipit autem, optio veniam doloribus voluptatibus mollitia perferendis facilis repudiandae minus reprehenderit saepe iusto ducimus provident! Voluptate eos maxime vitae, blanditiis quo nobis, iste, corrupti aliquam soluta voluptatem numquam quam odio ipsa! Similique, sunt? Cupiditate pariatur inventore sequi nobis obcaecati, dolor placeat nesciunt, eum autem asperiores, maxime praesentium qui ipsa. Ex necessitatibus repellendus, temporibus dolores provident voluptates quidem culpa laborum rem quia dignissimos velit voluptas amet repudiandae quae tempora distinctio quas."
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      oldPrice: 19,
      price: 12,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus expedita, ducimus blanditiis cupiditate, eveniet corporis iste doloremque dolores magni fuga aperiam nulla similique veniam non? Natus tenetur molestias aliquam labore quisquam exercitationem maiores, adipisci ad, excepturi sed alias, aut unde. Repellat at quaerat ullam voluptates ratione, labore deserunt quod deleniti laudantium expedita suscipit autem, optio veniam doloribus voluptatibus mollitia perferendis facilis repudiandae minus reprehenderit saepe iusto ducimus provident! Voluptate eos maxime vitae, blanditiis quo nobis, iste, corrupti aliquam soluta voluptatem numquam quam odio ipsa! Similique, sunt? Cupiditate pariatur inventore sequi nobis obcaecati, dolor placeat nesciunt, eum autem asperiores, maxime praesentium qui ipsa. Ex necessitatibus repellendus, temporibus dolores provident voluptates quidem culpa laborum rem quia dignissimos velit voluptas amet repudiandae quae tempora distinctio quas."
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 50)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">RESET CART</span>
    </div>
  );
};

export default Cart;
