
import CustomButton from "../../../components/CustomButton";
import DownArrow from "../../../assets/images/icons/down-arrow.svg?react";
import Close from "../../../assets/images/icons/close.svg?react";
import workDb from "../../../db/workDb";
const Work = () => {
  return (
    <section className="work">
      <div className="container">
        <div className="row">
          <div className="work-top">
            <div className="filters">
              <div className="title">Filters:</div>
              <div className="right-side">
                <CustomButton
                  onClick={() => {}}
                  className="work-btn"
                  text="by service"
                >
                  <DownArrow />
                </CustomButton>
                <div className="modal all-category">
                  <CustomButton
                    onClick={() => {}}
                    text="Brand"
                    className="category-btn active"
                  />
                  <CustomButton
                    onClick={() => {}}
                    text="Ecommerce"
                    className="category-btn"
                  />
                  <CustomButton
                    onClick={() => {}}
                    text="Illustrayion"
                    className="category-btn"
                  />
                  <CustomButton
                    onClick={() => {}}
                    text="Media"
                    className="category-btn"
                  />
                  <CustomButton
                    onClick={() => {}}
                    text="Messaging Platform"
                    className="category-btn"
                  />
                </div>
              </div>
            </div>
            <div className="hidden selected-category">
              <CustomButton
                onClick={() => {}}
                text="Brand"
                className="selected-btn"
              >
                <Close />
              </CustomButton>
            </div>
          </div>
          <div className="work-bottom">
            {workDb.map((item) => (
              <div className="card">
                <div className="card-img">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="card-info">
                  <h2 className="card-title">{item.title}</h2>
                  <p className="card-text">{item.text}</p>
                </div>
              </div>
            ))}
            {/* <div className="card">
              <div className="card-img">
                <img src={belongDesigns} alt="belong-designs" />
              </div>
              <div className="card-info">
                <h2 className="card-title">Belong Designs</h2>
                <p className="card-text">Apparel for adventure everywhere</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
