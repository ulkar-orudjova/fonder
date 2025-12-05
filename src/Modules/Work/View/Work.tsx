
import CustomButton from "../../../components/CustomButton";
import DownArrow from "../../../assets/images/icons/down-arrow.svg?react";
import Close from "../../../assets/images/icons/close.svg?react";
import workDb, { type IWorkDb } from "../../../db/workDb";
import { WorkCategory } from "../../../db/workDb";
import { useEffect, useState } from "react";
import { WorkService } from "../service/WorkService";

const Work = () => {
  const [categories, setCategories] = useState<WorkCategory[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<WorkCategory | null>(null);
  const [filteredWork, setFilteredWork] = useState<IWorkDb[]>(workDb);

  useEffect(() => {
    const res = WorkService.getCategories();
    setCategories(res);
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = workDb.filter(
        (item) => item.category === selectedCategory
      );
      setFilteredWork(filtered);
    } else {
      setFilteredWork(workDb);
    }
  }, [selectedCategory]);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleCategorySelect = (category: WorkCategory) => {
    setSelectedCategory(category);
    setShowModal(false); 
  };

  const handleCategoryRemove = () => {
    setSelectedCategory(null);
  };

  return (
    <section data-aos = "fade-up" className="work">
      <div className="container">
        <div className="row">
          <div className="work-top">
            <div className="filters">
              <div className="title">Filters:</div>
              <div className="right-side">
                <CustomButton
                  onClick={toggleModal}
                  className="work-btn"
                  text="by service"
                >
                  <DownArrow />
                </CustomButton>
                <div
                  className={`modal all-category ${showModal ? "show" : ""}`}
                >
                  {categories.map((item) => (
                    <CustomButton
                      key={item}
                      onClick={() => handleCategorySelect(item)}
                      text={item}
                      className={`category-btn ${
                        selectedCategory === item ? "active" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div
              className={`selected-category ${selectedCategory ? "" : "hidden"}`}
            >
              {selectedCategory && (
                <CustomButton
                  onClick={handleCategoryRemove} 
                  text={selectedCategory}
                  className="selected-btn"
                >
                  <Close />
                </CustomButton>
              )}
            </div>
          </div>
          <div className="work-bottom">
            {filteredWork.map((item) => (
              <div className="card" key={item.id}>
                <div className="card-img">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="card-info">
                  <h2 className="card-title">{item.title}</h2>
                  <p className="card-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;