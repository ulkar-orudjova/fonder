import { Link } from "react-router-dom";
import Delete from "../../../assets/images/icons/delete.svg?react";
import Dashed from "../../../assets/images/icons/dashed.svg?react";
import ArrowRight  from "../../../assets/images/icons/arrow-right.svg?react"

const Cart = () => {
  return (
    <section className="cart-contact">
      <div className="cart-right-bg-color"></div>
      <div className="container">
        <div className="grid">
          <div className="contact-cart">
            <h2 className="contact-cart-title">Contact Cart</h2>
            <ul className="cart-list">
                <li className="list-item">
                    <span className="stage">1</span>
                    <p className="info">Submit a cart</p>
                </li>
                 <li className="list-item">
                    <span className="stage">2</span>
                    <p className="info">Meet the team</p>
                </li>
                 <li className="list-item">
                    <span className="stage">3</span>
                    <p className="info">Kick off project</p>
                </li>
            </ul>
            <div className="border"></div>
            <div className="products">
              {/* <div className="product" key={item._id}>
              <div className="product-img">
                <img src={item.productImage} alt={item.name} />
              </div>
              <div className="right-side">
                <div className="top">
                  <div className="cart-info">
                    <Link to={"/shop"}>
                      <h5 className="title">{item.name}</h5>
                    </Link>
                  </div>
                  <button
                    className="delete"
                    onClick={() => {
                      dispatch(removeFromCart(item._id));
                    }}
                  >
                    <Delete className="remove-svg" />
                  </button>
                </div>
                <p className="cart-price">${item.price},000</p>
                <p className="quantity">Quantity: {item.quantity}</p>
              </div>
            </div> */}
            </div>
            <div className="contact-cart-bottom">
              <div className="dashed">
                <Dashed />
              </div>
              <div className="total-price">
                <span className="title">Total:</span>
                <span className="price">$2,500</span>
              </div>
              <div className="border"></div>
              <div className="cart-link">
                <Link to={"/shop"}>
                Keep Shopping 
                <ArrowRight className="arrow-right"/>
                </Link>
              </div>
            </div>
          </div>
          <div className="contact-form"></div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
