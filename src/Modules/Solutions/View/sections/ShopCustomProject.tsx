import CustomButton from "../../../../components/CustomButton";
import customProject from "../../../../assets/images/custom-project.webp";
import { useAppDispatch } from "../../../../redux/hooks";
import { setIsContactModalOpen } from "../../../../redux/slices/modalSlice";

const ShopCustomProject = () => {
  const dispatch = useAppDispatch();
  return (
    <section data-aos = "fade-up"  className="shop-custom-project">
      <div className="container">
        <div className="row">
          <div className="left-side">
            <h2 className="title">Custom Project</h2>
            <div className="left-side-bottom">
              <p className="text">
                If you have something specific in mind, we’re all ears. Connect
                with our team to build a tailored approach.
              </p>
              <div className="button">
                <CustomButton onClick={()=>dispatch(setIsContactModalOpen(true))} text="Start a project" />
              </div>
            </div>
          </div>

          <img src={customProject} alt="custom-project-img" />
        </div>
      </div>
    </section>
  );
};

export default ShopCustomProject;
