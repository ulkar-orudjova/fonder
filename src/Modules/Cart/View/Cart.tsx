import { Link } from "react-router-dom";
import Delete from "../../../assets/images/icons/delete.svg?react";
import Dashed from "../../../assets/images/icons/dashed.svg?react";
import ArrowRight from "../../../assets/images/icons/arrow-right.svg?react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { removeFromCart } from "../../../redux/slices/productSlice";
import CustomButton from "../../../components/CustomButton";

const Cart = () => {
  const cart = useAppSelector((state) => state.productSlice.cart);
  const dispatch = useAppDispatch();

  return (
    <section data-aos="fade-up" className="cart-contact">
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
              {cart.map((item) => (
                <div className="product" key={item._id}>
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
                        onClick={() => dispatch(removeFromCart(item._id))}
                      >
                        <Delete className="remove-svg" />
                      </button>
                    </div>
                    <p className="cart-price">${item.price},000</p>
                    <p className="quantity">Quantity: {item.quantity}</p>
                  </div>
                </div>
              ))}
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
                  <ArrowRight className="arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <div className="row">
              <form className="form">
                <div className="form-group personal-info">
                  <fieldset className="first-name">
                    <label htmlFor="first-name">
                      First name
                      <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      placeholder="Jane"
                    />
                  </fieldset>
                  <fieldset className="last-name">
                    <label htmlFor="last-name">
                      Last name
                      <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      placeholder="Doe"
                    />
                  </fieldset>
                </div>
                <div className="form-group company-info">
                  <fieldset className="company-name">
                    <label htmlFor="company">
                      Company
                      <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Schrute Farms"
                    />
                  </fieldset>
                  <fieldset className="website">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      placeholder="justbeetit.com"
                    />
                  </fieldset>
                </div>
                <fieldset>
                  <label htmlFor="email">
                    Email
                    <span>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="jane@email.com"
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="what-is-your-annual-revenue">
                    What is your annual revenue?
                  </label>
                  <select
                    name="what-is-your-annual-revenue"
                    id="what-is-your-annual-revenue"
                  >
                    <option value="selected">Select an option...</option>
                    <option value="$<1M">$ &lt; 1M</option>
                    <option value="$<$1M-5M">$1M-5M</option>
                    <option value="$<$5M-10M">$5M-10M</option>
                    <option value="$<$10M-$25M">$10M-$25M</option>
                    <option value="$25M+">$25M+</option>
                  </select>
                </fieldset>
                <fieldset>
                  <label htmlFor="tell-us-about-your-project">
                    Tell us about your project...
                  </label>
                  <textarea
                    name="tell-us-about-your-project"
                    id="tell-us-about-your-project"
                    placeholder="What are you setting out to accomplish?"
                  ></textarea>
                </fieldset>
                <div className="submit-button">
                  <CustomButton onClick={() =>{}} text="I'm ready to talk">
                    <ArrowRight className="arrow-right"/>
                  </CustomButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
