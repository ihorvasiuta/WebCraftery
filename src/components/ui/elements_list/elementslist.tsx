import React, { useState, useEffect } from "react";
import "./elementslist.css";
import listData from "./elementslist.json";

const ElementsList: React.FC = () => {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    setList(listData);
  }, []);

  const toggleSubitems = (index: number) => {
    const newList = [...list];
    newList[index].open = !newList[index].open;
    setList(newList);
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
      <div className="elements_list_inner">
        {list.map((item, index) => (
          <div key={index} className="element_group">
            <div
              className="element_title"
              onClick={() => toggleSubitems(index)}
            >
              <span>{item.title}</span>
              <span className={`arrow ${item.open ? "open" : ""}`}>
                <img
                  src={require(`./icons/subitem_arrow.png`)}
                  alt="Arrow Icon"
                />
              </span>
            </div>
            <ul className="subitems open">
              {item.childrens.map((subitem: any, subIndex: number) => (
                <li key={subIndex} className="subitem">
                  <a href={subitem.path || "#"}>{subitem.title}</a>
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
