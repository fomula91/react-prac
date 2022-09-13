import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct(props) {
  return (
    <div>
      <div className="checkoutProduct">
        <img
          src="https://cdn.pixabay.com/photo/2013/05/30/18/21/cat-114782_1280.jpg"
          alt=""
          style={{ width: "200px", height: "200px" }}
          className="checkoutProduck__image"
        />
        <div className="produck__info">
          <p className="checkoutProduck__title">asdasdadasdadsad</p>
          <p className="checkoutProduck__price">
            <small>$</small>
            <strong>20</strong>
          </p>
          <div className="checkoutProduck__rating">⭐⭐</div>
          <button>Remove from Basket</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
