import Dashed from "../assets/images/icons/dashed.svg?react";
import ArrowRight from "../assets/images/icons/arrow-right.svg?react";
import Wifi from "../assets/images/icons/wifi.svg?react";
import Close from "../assets/images/icons/close.svg?react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setIsContactModalOpen } from "../redux/slices/modalSlice";
import CustomButton from "./CustomButton";
import { contactListDb } from "../db/sliderDb";
import { Link } from "react-router-dom";

const CustomContact = () => {
  const state = useAppSelector((state) => state.modalSlice.isContactModalOpen);
  const dispatch = useAppDispatch();

  console.log(state);

  return (
    <div className={`custom-contact ${state ? 'active' : ''}`}>
      <div className="fixed">
        <div className="overlay"></div>

        <div className="contact">
          <div className="grid">
            <div className="contact-form">
              <div className="row">
                <div className="contact-title">
                  <h2 className="title">Start a project</h2>
                </div>
                <div className="underline">
                  <Dashed />
                </div>
                <form className="form">
                  <div className="form-input">
                    <fieldset>
                      <label htmlFor="name">
                        Name <span>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                      />
                    </fieldset>
                    <fieldset>
                      <label htmlFor="job-title">
                        Job Title <span>*</span>
                      </label>
                      <input
                        type="text"
                        name="job-title"
                        id="job-title"
                        placeholder="Job Title"
                      />
                    </fieldset>
                  </div>
                  <div className="form-input">
                    <fieldset>
                      <label htmlFor="email">
                        Email <span>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </fieldset>
                    <fieldset>
                      <label htmlFor="website-or-company-name">
                        Website or Company Name <span>*</span>
                      </label>
                      <input
                        type="text"
                        name="website-or-company-name"
                        id="website-or-company-name"
                        placeholder="Website or Company Name"
                      />
                    </fieldset>
                  </div>
                  <fieldset>
                    <label htmlFor="message">
                      Message <span>*</span>
                    </label>
                    <textarea
                      className="form-textarea"
                      name="message"
                      id="message"
                      placeholder="Tell us about your project and goals."
                    ></textarea>
                  </fieldset>
                  <div className="form-btn">
                    <CustomButton onClick={() => {}} text="Submit">
                      <ArrowRight className="arrow-right" />
                    </CustomButton>
                  </div>
                </form>
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-info-top">
                <Wifi className="contact-svg" />
                <h2 className="title">Working All Over</h2>
                <p className="contact-text">
                  Fonder is a U.S. based team of industry leaders working in
                  various locations across the U.S.
                </p>
              </div>
              <ul className="contact-list">
                {contactListDb.map((item) => (
                  <li className="list-item" key={item.id}>
                    <img src={item.img} alt={item.name} />
                    <p className="list-info">
                      <span className="list-title">{item.name}</span>
                      <span className="list-name">{item.title}</span>
                    </p>
                  </li>
                ))}
              </ul>
              <div className="underline">
                <Dashed />
              </div>
              <div className="contact-info-bottom">
                <p className="contact-info-bottom-title">Hit us direct</p>
                <div className="contact-info-bottom-links">
                  <Link to={"mailto:hello@fonder.studio"}>hello@fonder.studio</Link>
                  <span className="divider">|</span>
                   <Link to={"tel:801.252.5442"}>801.252.5442</Link>
                </div>
              </div>
            </div>
            <div className="close-button">
              <CustomButton
                className="close-btn"
                onClick={() => dispatch(setIsContactModalOpen(false))}
                text="Close"
              >
                <Close/>
              </CustomButton>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomContact;
