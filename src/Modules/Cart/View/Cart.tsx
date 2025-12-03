import { Link, useNavigate } from "react-router-dom";
import Delete from "../../../assets/images/icons/delete.svg?react";
import Dashed from "../../../assets/images/icons/dashed.svg?react";
import ArrowRight from "../../../assets/images/icons/arrow-right.svg?react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  clearCart,
  removeFromCart,
  setProductCount,
} from "../../../redux/slices/productSlice";
import CustomButton from "../../../components/CustomButton";
import {
  SetProductCountEnum,
  type IProductParams,
} from "../../Solutions/Models/ShopModel";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { ICheckoutFormData } from "../Models/CartModel";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { EMAIL_REGEX, MIN_TWO_LETTERS_REGEX } from "../../../utils/helper";

const loginSchema = object({
  firstName: string()
    .trim()
    .required()
    .matches(
      MIN_TWO_LETTERS_REGEX,
      "It must consist of at least 2 symbols!"
    ),
  lastName: string()
    .trim()
    .required()
    .matches(
      MIN_TWO_LETTERS_REGEX,
      "It must consist of at least 2 symbols!"
    ),
  email: string().trim().required().matches(EMAIL_REGEX,"Please enter a valid email address"),
  company: string().trim().required(),
  website: string().trim().required(),
  message: string().trim().required(),
});

const Cart = () => {
  const cart = useAppSelector((state) => state.productSlice.cart);
  const totalPrice = useAppSelector((state) => state.productSlice.totalPrice);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleProductCount = (productParams: IProductParams) => {
    dispatch(setProductCount(productParams));
  };

  // form validation hissesi
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICheckoutFormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<ICheckoutFormData> = (data) => {

    console.log(data);
    dispatch(clearCart());
    reset();
    navigate("/success");
  };

  return (
    <section data-aos="fade-up" className="cart-contact">
      {cart.length === 0 ? (
        <div className="empty">
          <div className="row">
            <h2 className="empty-title">YOUR CART IS EMPTY...</h2>
            <p className="empty-text">
              Build a contact cart or reach out to get started.
            </p>
            <Link to={"/shop"}>
              <CustomButton onClick={() => {}} text="Explore our solutions">
                <ArrowRight className="arrow-right" />
              </CustomButton>
            </Link>
          </div>
        </div>
      ) : (
        <>
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
                        <div className="counter">
                          <button
                            className="counter-btn"
                            onClick={() =>
                              handleProductCount({
                                countType: SetProductCountEnum.DECREMENT,
                                productId: item._id,
                              })
                            }
                          >
                            -
                          </button>
                          <span className="quantity"> {item.quantity}</span>
                          <button
                            className="counter-btn"
                            onClick={() =>
                              handleProductCount({
                                countType: SetProductCountEnum.INCREMENT,
                                productId: item._id,
                              })
                            }
                          >
                            +
                          </button>
                        </div>
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
                    <span className="price">${totalPrice},000</span>
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
                  <form onSubmit={handleSubmit(onSubmit)} className="form">
                    <div className="form-group personal-info">
                      <fieldset className="first-name">
                        <label htmlFor="first-name">
                          First name
                          <span>*</span>
                        </label>
                        <input
                          type="text"
                          id="first-name"
                          {...register("firstName")}
                          placeholder="Jane"
                        />
                        {errors.firstName && (
                          <span className="error-msg">
                            {errors.firstName.message}
                          </span>
                        )}
                      </fieldset>
                      <fieldset className="last-name">
                        <label htmlFor="last-name">
                          Last name
                          <span>*</span>
                        </label>
                        <input
                          type="text"
                          id="last-name"
                          {...register("lastName")}
                          placeholder="Doe"
                        />
                        {errors.firstName && (
                          <span className="error-msg">
                            {errors.lastName?.message}
                          </span>
                        )}
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
                          {...register("company")}
                          placeholder="Schrute Farms"
                        />
                        {errors.firstName && (
                          <span className="error-msg">
                            {errors.company?.message}
                          </span>
                        )}
                      </fieldset>
                      <fieldset className="website">
                        <label htmlFor="website">Website</label>
                        <input
                          type="text"
                          id="website"
                          {...register("website")}
                          placeholder="justbeetit.com"
                        />
                        {errors.firstName && (
                          <span className="error-msg">
                            {errors.website?.message}
                          </span>
                        )}
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
                        {...register("email")}
                        placeholder="jane@email.com"
                      />
                      {errors.firstName && (
                          <span className="error-msg">
                            {errors.email?.message}
                          </span>
                        )}
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
                      <label htmlFor="message">
                        Tell us about your project...
                      </label>
                      <textarea
                        {...register("message")}
                        id="message"
                        placeholder="What are you setting out to accomplish?"
                      ></textarea>
                    </fieldset>
                    <div className="submit-button">
                      <CustomButton  type={"submit"} onClick={() => {}} text="I'm ready to talk">
                        <ArrowRight className="arrow-right" />
                      </CustomButton>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
