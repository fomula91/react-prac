import React from "react";
import "./Home.css";
import Products from "./Products.js";

function Home(props) {
  return (
    <div>
      <div className="Home">
        <div className="home__container">
          <img
            src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
            alt=""
            className="home__image"
          />
          <div className="home__row">
            <Products
              id="123"
              title="asdasdasdasddas"
              price={11.63}
              rating={5}
              image="https://cdn.pixabay.com/photo/2013/05/30/18/21/cat-114782_1280.jpg"
            />
            <Products
              id="4"
              title="asdasdasdasddas"
              price={11.63}
              rating={5}
              image="https://cdn.pixabay.com/photo/2013/05/30/18/21/cat-114782_1280.jpg"
            />
          </div>
          <div className="home__row">
            <Products
              id="5"
              title="asdasdasdasddas"
              price={11.63}
              rating={5}
              image="https://cdn.pixabay.com/photo/2013/05/30/18/21/cat-114782_1280.jpg"
            />
            <Products
              id="6"
              title="asdasdasdasddas"
              price={11.63}
              rating={5}
              image="https://cdn.pixabay.com/photo/2013/05/30/18/21/cat-114782_1280.jpg"
            />
            <Products
              id="7"
              title="asdasdasdasddas"
              price={11.63}
              rating={5}
              image="https://cdn.pixabay.com/photo/2013/05/30/18/21/cat-114782_1280.jpg"
            />
          </div>
          <div className="home__row">
            <Products
              id="8"
              title="asdasdasdasddas"
              price={11.63}
              rating={5}
              image="https://cdn.pixabay.com/photo/2013/05/30/18/21/cat-114782_1280.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
