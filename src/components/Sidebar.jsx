import React from "react";
import { FaListUl } from "react-icons/fa";
import { creatQueryObject } from "../helpers/helper";

import styles from "./sideBar.module.css";
import { Categories } from "../constants/list";

function Sidebar({ setQuery, query }) {
  const catgoriesHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => creatQueryObject(query, { category }));
  };

  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories </p>
      </div>
      <ul onClick={catgoriesHandler}>
        {Categories.map((item) => (
          <li
            key={item.id}
            className={
              item.type.toLowerCase() === query.category
                ? styles.selected
                : null
            }
          >
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
