import { useState, useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import categoryGroups from "./categoryGroups";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import filter_images from "../../assets/image/filter.715a6a6e.svg";
import { HiOutlineX } from "react-icons/hi";

function ProductFilter({ categories, show, onClose }) {
  const { setSelectedCategory, selectedCategory } = useContext(ProductContext);

  const [openMain, setOpenMain] = useState(null);
  const [openSub, setOpenSub] = useState(null);

  return (
    <aside className={`sidebar ${show ? "active" : ""}`}>
      <div className="filter-header">
        <h3>Filters</h3>
        <button className="close-btn-mobile" onClick={onClose}>
          <HiOutlineX />
        </button>
        <span className="icon-filter-desktop">
          <img src={filter_images} alt="filter icon" />
        </span>
      </div>

      <ul className="category-list">
        {Object.entries(categoryGroups).map(([groupName, groupItems]) => (
          <li key={groupName} className="filter-section">
            {/* MAIN CATEGORY */}
            <div
              className="filter_list_item"
              onClick={() =>
                setOpenMain(openMain === groupName ? null : groupName)
              }
            >
              <h4>{groupName}</h4>

              <MdOutlineKeyboardArrowRight
                className={openMain === groupName ? "rotate" : ""}
              />
            </div>

            {openMain === groupName && (
              <ul className="filter-list">
                {/* If there are categories */}
                {Array.isArray(groupItems) &&
                  groupItems
                    .filter((cat) => categories.includes(cat))
                    .map((cat) => (
                      <li
                        key={cat}
                        className={selectedCategory === cat ? "active" : ""}
                        onClick={() => {
                          setSelectedCategory(cat);
                          onClose();
                        }}
                      >
                        {cat.replace("-", " ")}
                      </li>
                    ))}

                {/* If there are subcategories */}
                {!Array.isArray(groupItems) &&
                  Object.entries(groupItems).map(([subName, subItems]) => (
                    <div key={subName} className="sub-section">
                      <div
                        className="sub-header"
                        onClick={() =>
                          setOpenSub(openSub === subName ? null : subName)
                        }
                      >
                        {subName}

                        <MdOutlineKeyboardArrowRight
                          className={openSub === subName ? "rotate" : ""}
                        />
                      </div>

                      {openSub === subName && (
                        <ul>
                          {subItems
                            .filter((cat) => categories.includes(cat))
                            .map((cat) => (
                              <li
                                key={cat}
                                className={
                                  selectedCategory === cat ? "active" : ""
                                }
                                onClick={() => {
                                  setSelectedCategory(cat);
                                  onClose();
                                }}
                              >
                                {cat.replace("-", " ")}
                              </li>
                            ))}
                        </ul>
                      )}
                    </div>
                  ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <button
        className="reset-btn"
        onClick={() => {
          setSelectedCategory("all");
          setOpenMain(null);
          setOpenSub(null);
        }}
      >
        Reset
      </button>
    </aside>
  );
}

export default ProductFilter;
