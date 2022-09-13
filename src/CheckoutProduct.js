import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div>
      <div className="checkoutProduct">
        <img
          src={image}
          alt=""
          style={{ width: "200px", height: "200px" }}
          className="checkoutProduck__image"
        />
        <div className="produck__info">
          <p className="checkoutProduck__title">{title}</p>
          <p className="checkoutProduck__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduck__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>⭐</p>
              ))}
          </div>
          <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
