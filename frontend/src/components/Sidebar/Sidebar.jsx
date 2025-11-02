import { useState } from "react";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdSearch,
} from "react-icons/md";
import "./Sidebar.css";

const Sidebar = ({ setFilters }) => {
  const [openAccordion, setOpenAccordion] = useState({
    ideal: true,
    occasion: false,
    fabric: false,
    material: false,
    pattern: false,
    work: false,
    suitable: false,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setLocalFilters] = useState({
    ideal: [],
    occasion: [],
    fabric: [],
    material: [],
    pattern: [],
    work: [],
    suitable: [],
  });

  const toggleAccordion = (section) => {
    setOpenAccordion((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCheckboxChange = (section, value) => {
    setLocalFilters((prev) => {
      const isChecked = prev[section].includes(value);
      const updatedSection = isChecked
        ? prev[section].filter((item) => item !== value)
        : [...prev[section], value];

      const updatedFilters = { ...prev, [section]: updatedSection };
      setFilters(updatedFilters);
      return updatedFilters;
    });
  };

  return (
    <div className="sidebar">
      <div className="sidebar-search">
        <MdSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setFilters((prev) => ({ ...prev, search: e.target.value }));
          }}
        />
      </div>
      <div className="accordion-section">
        <div
          className="accordion-header"
          onClick={() => toggleAccordion("ideal")}
        >
          <h4>IDEAL FOR</h4>
          {openAccordion.ideal ? (
            <MdKeyboardArrowUp className="accordion-icon" />
          ) : (
            <MdKeyboardArrowDown className="accordion-icon" />
          )}
        </div>
        {openAccordion.ideal && (
          <div className="accordion-content">
            {["Men", "Women", "Electronics", "Jewelery"].map((item) => (
              <label key={item}>
                <input
                  type="checkbox"
                  checked={filters.ideal.includes(item)}
                  onChange={() => handleCheckboxChange("ideal", item)}
                />
                {item}
              </label>
            ))}
          </div>
        )}
      </div>
      <div className="accordion-section">
        <div
          className="accordion-header"
          onClick={() => toggleAccordion("occasion")}
        >
          <h4>OCCASION</h4>
          {openAccordion.occasion ? (
            <MdKeyboardArrowUp className="accordion-icon" />
          ) : (
            <MdKeyboardArrowDown className="accordion-icon" />
          )}
        </div>
        {openAccordion.occasion && (
          <div className="accordion-content">
            {["Casual", "Formal", "Party", "Festive"].map((item) => (
              <label key={item}>
                <input
                  type="checkbox"
                  checked={filters.occasion.includes(item)}
                  onChange={() => handleCheckboxChange("occasion", item)}
                />{" "}
                {item}
              </label>
            ))}
          </div>
        )}
      </div>
      <div className="accordion-section">
        <div
          className="accordion-header"
          onClick={() => toggleAccordion("fabric")}
        >
          <h4>FABRIC</h4>
          {openAccordion.fabric ? (
            <MdKeyboardArrowUp className="accordion-icon" />
          ) : (
            <MdKeyboardArrowDown className="accordion-icon" />
          )}
        </div>
        {openAccordion.fabric && (
          <div className="accordion-content">
            {["Cotton", "Silk", "Denim", "Linen"].map((item) => (
              <label key={item}>
                <input
                  type="checkbox"
                  checked={filters.fabric.includes(item)}
                  onChange={() => handleCheckboxChange("fabric", item)}
                />{" "}
                {item}
              </label>
            ))}
          </div>
        )}
      </div>
      <div className="accordion-section">
        <div
          className="accordion-header"
          onClick={() => toggleAccordion("pattern")}
        >
          <h4>PATTERN</h4>
          {openAccordion.pattern ? (
            <MdKeyboardArrowUp className="accordion-icon" />
          ) : (
            <MdKeyboardArrowDown className="accordion-icon" />
          )}
        </div>
        {openAccordion.pattern && (
          <div className="accordion-content">
            {["Solid", "Printed", "Striped", "Embroidered"].map((item) => (
              <label key={item}>
                <input
                  type="checkbox"
                  checked={filters.pattern.includes(item)}
                  onChange={() => handleCheckboxChange("pattern", item)}
                />{" "}
                {item}
              </label>
            ))}
          </div>
        )}
      </div>
      <div className="accordion-section">
        <div
          className="accordion-header"
          onClick={() => toggleAccordion("material")}
        >
          <h4>RAW MATERIALS</h4>
          {openAccordion.material ? (
            <MdKeyboardArrowUp className="accordion-icon" />
          ) : (
            <MdKeyboardArrowDown className="accordion-icon" />
          )}
        </div>
        {openAccordion.material && (
          <div className="accordion-content">
            {["Organic", "Synthetic", "Recycled"].map((item) => (
              <label key={item}>
                <input
                  type="checkbox"
                  checked={filters.material.includes(item)}
                  onChange={() => handleCheckboxChange("material", item)}
                />{" "}
                {item}
              </label>
            ))}
          </div>
        )}
      </div>
      <div className="accordion-section">
        <div
          className="accordion-header"
          onClick={() => toggleAccordion("work")}
        >
          <h4>WORK</h4>
          {openAccordion.work ? (
            <MdKeyboardArrowUp className="accordion-icon" />
          ) : (
            <MdKeyboardArrowDown className="accordion-icon" />
          )}
        </div>
        {openAccordion.work && (
          <div className="accordion-content">
            {["Embroidery", "Handcrafted", "Machine Work"].map((item) => (
              <label key={item}>
                <input
                  type="checkbox"
                  checked={filters.work.includes(item)}
                  onChange={() => handleCheckboxChange("work", item)}
                />
                {item}
              </label>
            ))}
          </div>
        )}
      </div>
      <div className="accordion-section">
        <div
          className="accordion-header"
          onClick={() => toggleAccordion("suitable")}
        >
          <h4>SUITABLE FOR</h4>
          {openAccordion.suitable ? (
            <MdKeyboardArrowUp className="accordion-icon" />
          ) : (
            <MdKeyboardArrowDown className="accordion-icon" />
          )}
        </div>
        {openAccordion.suitable && (
          <div className="accordion-content">
            {["Daily Wear", "Office Wear", "Traditional"].map((item) => (
              <label key={item}>
                <input
                  type="checkbox"
                  checked={filters.suitable.includes(item)}
                  onChange={() => handleCheckboxChange("suitable", item)}
                />
                {item}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
