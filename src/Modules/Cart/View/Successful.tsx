import CustomButton from "../../../components/CustomButton";
import successImg from "../../../assets/images/success-img.gif";
import { useNavigate } from "react-router-dom";

const Successful = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  return (
    <section className="success">
      <div className="container">
        <div className="row">
          <div data-aos = "fade-right" className="left-side">
            <img src={successImg} alt="success-img" />
          </div>
          <div data-aos = "fade-left" className="right-side">
            <h2 className="title">Contact Cart Received</h2>
            <div>
              <p className="text">
                Thanks for reaching out! Our team is reviewing your cart and
                will be in touch shortly to set up an introduction.
              </p>
              <CustomButton text="Take me home" onClick={goToHome} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Successful;
