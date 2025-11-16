import Dashed from "../assets/images/icons/dashed.svg?react";
import CustomButton from "./CustomButton";

const CustomContact = () => {
  return (
    <div className="custom-contact">
      <div className="container">
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
                    <label htmlFor="message">Message <span>*</span></label>
                    <textarea className="form-textarea" name="message" id="message" placeholder="Tell us about your project and goals."></textarea>
                  </fieldset>
                  <div className="form-btn">
                    <CustomButton onClick={() =>{}} text="Submit"></CustomButton>
                  </div>
                </form>
              </div>
            </div>
            <div className="contact-info">

            </div>
            <div className="close-button">
                <CustomButton  onClick={() => {}} text="Close"></CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomContact;
