import Dashed from "../../../assets/images/icons/dashed.svg?react";

const ProjectOutcome = () => {
  return (
    <section className="project-outcome">
      <div className="container">
        <div className="row">
          <div className="outcome">
            <h2 className="statistics">
              <span className="title">4x</span>
              <span className="sub-title">YOY Growth</span>
            </h2>
            <h3 className="text">
              "Brand awareness is through the roof. We’ve seen a 600% increase
              on social media and have hit shelves in major distributors across
              the U.S. The packaging looks incredible and in our first sales
              meetings, buyers are eager to get them on the shelves ASAP. We
              could not be more excited."
            </h3>
            <div className="info">
              <h4 className="person-info">
                <span className="person-name">Collin R.</span>
                <span className="position">
                  Co-Founder & President, NuRange Coffee
                </span>
              </h4>
              <div className="tags">
                <span className="tag">Strategy</span>
                <span className="tag">Brand Identity</span>
                <span className="tag">Packaging</span>
              </div>
            </div>
          </div>
          <div className="outcome">
            <div className="dashed-svg">
              <Dashed className="dashed" />
            </div>
            <h2 className="statistics">
              <span className="title">7x</span>
              <span className="sub-title">Product Expansion</span>
            </h2>
            <h3 className="text">
              “Our concept has seen rapid adoption across the U.S., largely
              thanks to bold, eye-catching packaging that made it instantly
              recognizable and easy to grasp. And beyond the packaging is a
              brand system that's allowed us to scale quickly with new
              audiences. We’re extremely happy with the result and excited to
              work with them again.”
            </h3>
            <div className="info">
              <h4 className="person-info">
                <span className="person-name">Rachel S.</span>
                <span className="position">Founder & Owner, Escapely</span>
              </h4>
              <div className="tags">
                <span className="tag">Brand Design</span>
                <span className="tag">Packaging</span>
                <span className="tag">Web Design</span>
              </div>
            </div>
          </div>
          <div className="outcome">
            <div className="dashed-svg">
              <Dashed className="dashed" />
            </div>
            <h2 className="statistics">
              <span className="title">10x</span>
              <span className="sub-title">Qualified Leads</span>
            </h2>
            <h3 className="text">
              "Fonder helped us reposition from a behind-the-scenes production
              shop to a sought-after creative partner. The rebrand didn’t just
              look good—it drove real growth, making it easier for new clients
              to approach us and existing ones to see our full value.."
            </h3>
            <div className="info">
              <h4 className="person-info">
                <span className="person-name">Steven C.</span>
                <span className="position">
                  Partner & Director, Butcher Bird
                </span>
              </h4>
              <div className="tags">
                <span className="tag">Branding</span>
                <span className="tag">Web & Interactive</span>
                <span className="tag">Strategy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOutcome;
