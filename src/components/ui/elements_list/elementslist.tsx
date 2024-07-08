import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./elementslist.css";
import listData from "./elementslist.json";
import { ElementItem, Category } from "./types";

const ElementsList: React.FC<{ onSelect: (item: ElementItem) => void }> = ({
  onSelect,
}) => {
  const [list, setList] = useState<Category[]>(() =>
    listData.map((category) => ({ ...category, open: false }))
  );
  const [activeId, setActiveId] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleSubitems = (index: number) => {
    const newList = [...list];
    newList[index].open = !newList[index].open;
    setList(newList);
  };

  const handleSelectItem = (item: ElementItem) => {
    setActiveId(item.id);
    navigate(`/elements/${item.id}`);
  };

  return (
    <div className="list">
      <div className="title">
        <h1>Elements</h1>
        <img
          className="title_icon"
          src={require(`./icons/elements_icon.svg`).default}
          alt="Elements Icon"
        />
      </div>
      {/* <img
        src={require(`./elements_images/classic_slider_imgs/img1.jpg`)}
        alt=""
      /> */}
      <div className="elements_list_inner">
        {list.map((category, index) => (
          <div key={index} className="element_group">
            <div
              className="element_title"
              onClick={() => toggleSubitems(index)}
            >
              <span>{category.title}</span>
              <span className={`arrow ${category.open ? "open" : ""}`}>
                <img
                  src={require(`./icons/subitem_arrow.png`)}
                  alt="Arrow Icon"
                />
              </span>
            </div>
            <ul className={`subitems ${category.open ? "open" : ""}`}>
              {category.childrens.map((item, subIndex) => (
                <li
                  key={subIndex}
                  className={`subitem ${
                    item.id === activeId ? "active_element" : ""
                  }`}
                  onClick={() => handleSelectItem(item)}
                >
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSelectItem(item);
                    }}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElementsList;
