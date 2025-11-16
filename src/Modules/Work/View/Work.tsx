
import CustomButton from "../../../components/CustomButton";
import DownArrow from "../../../assets/images/icons/down-arrow.svg?react";
import Close from "../../../assets/images/icons/close.svg?react";
import workDb, { type IWorkDb } from "../../../db/workDb";
import { WorkCategory } from "../../../db/workDb";
import { useEffect, useState } from "react";
import { WorkService } from "../service/WorkService";


const Work = () => {
  // Bütün kateqoriyaları saxlamaq üçün state

  const [categories, setCategories] = useState<WorkCategory[]>([]);

  // Kateqoriya modalının görünürlüyünü idarə edən state
  const [showModal, setShowModal] = useState(false);

  // Cari seçilmiş kateqoriyanı saxlamaq üçün state (əvvəlcə null)
  const [selectedCategory, setSelectedCategory] = useState<WorkCategory | null>(null);

  // Filterlənmiş işləri saxlamaq üçün state
  const [filteredWork, setFilteredWork] = useState<IWorkDb[]>(workDb);

  // Kateqoriyaları yükləmək üçün useEffect
  useEffect(() => {
    const res = WorkService.getCategories();
    setCategories(res);
  }, []);

  // Filterləmə məntiqi üçün useEffect (selectedCategory dəyişdikdə işləyir)
  useEffect(() => {
    if (selectedCategory) {
      // Seçilmiş kateqoriya varsa, işləri filterlə
      const filtered = workDb.filter(
        (item) => item.category === selectedCategory
      );
      setFilteredWork(filtered);
    } else {
      // Seçilmiş kateqoriya yoxdursa, bütün işləri göstər
      setFilteredWork(workDb);
    }
  }, [selectedCategory]);

  // Modalın vəziyyətini dəyişən funksiya
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  // Kateqoriya seçimi funksiyası
  const handleCategorySelect = (category: WorkCategory) => {
    setSelectedCategory(category);
    setShowModal(false); 
  };

  // Seçilmiş kateqoriyanı (filteri) silən funksiya
  const handleCategoryRemove = () => {
    setSelectedCategory(null);
  };

  return (
    <section className="work">
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