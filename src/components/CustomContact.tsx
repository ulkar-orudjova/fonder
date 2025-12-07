import Dashed from "../assets/images/icons/dashed.svg?react";
import ArrowRight from "../assets/images/icons/arrow-right.svg?react";
import Wifi from "../assets/images/icons/wifi.svg?react";
import Close from "../assets/images/icons/close.svg?react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setIsContactModalOpen } from "../redux/slices/modalSlice";
import CustomButton from "./CustomButton";
import { contactListDb } from "../db/sliderDb";
import { Link } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { IContactFormData } from "../Modules/Contact/Models/ContactModel";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { EMAIL_REGEX, MIN_FIVE_LETTERS_REGEX, NAME_REGEX } from "../utils/helper";

const contactSchema = object({
  name: string().trim().required().matches(NAME_REGEX,"It must consist of at least 2 symbols!"),
  title: string().trim().required().matches(MIN_FIVE_LETTERS_REGEX,"It must consist of at least 5 symbols!"),
  email: string().trim().required().matches(EMAIL_REGEX, "Please enter a valid email address"),
  company_name: string().trim().required(),
  message: string().trim().required(),

})

const CustomContact = () => {
  const state = useAppSelector((state) => state.modalSlice.isContactModalOpen);
  const dispatch = useAppDispatch();

  //form validation

  const {register, handleSubmit, reset, formState:{errors}} = useForm<IContactFormData>({
    resolver: yupResolver(contactSchema)
  });

  const onSubmit: SubmitHandler<IContactFormData> = async (data) =>{
    console.log(data);
    reset()
  }

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
                <form onSubmit={handleSubmit(onSubmit)} className="form">
                  <div className="form-input">
                    <fieldset>
                      <label htmlFor="name">
                        Name <span>*</span>
                      </label>
                      <input
                        type="text"
                        {...register("name")}
                        id="name"
                        placeholder="Your Name"
                      />
                      {errors.name && (<span className="error-msg">{errors.name.message}</span>)}
                    </fieldset>
                    <fieldset>
                      <label htmlFor="title">
                        Job Title <span>*</span>
                      </label>
                      <input
                        type="text"
                        {...register("title")}
                        id="job-title"
                        placeholder="Job Title"
                      />
                      {errors.title && (<span className="error-msg">{errors.title.message}</span>)}
                    </fieldset>
                  </div>
                  <div className="form-input">
                    <fieldset>
                      <label htmlFor="email">
                        Email <span>*</span>
                      </label>
                      <input
                        type="email"
                         {...register("email")}
                        id="email"
                        placeholder="Email"
                      />
                      {errors.email && (<span className="error-msg">{errors.email.message}</span>)}
                    </fieldset>
                    <fieldset>
                      <label htmlFor="company_name">
                        Company Name <span>*</span>
                      </label>
                      <input
                        type="text"
                         {...register("company_name")}
                        id="company-name"
                        placeholder="Company Name"
                      />
                      {errors.company_name && (<span className="error-msg">{errors.company_name.message}</span>)}
                    </fieldset>
                  </div>
                  <fieldset>
                    <label htmlFor="message">
                      Message <span>*</span>
                    </label>
                    <textarea
                      className="form-textarea"
                      {...register("message")}
                      id="message"
                      placeholder="Tell us about your project and goals."
                    ></textarea>
                    {errors.message && (<span className="error-msg">{errors.message.message}</span>)}
                  </fieldset>
                  <div className="form-btn">
                    <CustomButton type={"submit"} onClick={() => {}} text="Submit">
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
