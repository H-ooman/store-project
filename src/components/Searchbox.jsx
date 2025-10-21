import { ImSearch } from "react-icons/im";
import { creatQueryObject } from "../helpers/helper";

import styles from "./searchBox.module.css";

function Searchbox({ search, setSearch, setQuery }) {
  const searchHandler = () => {
    setQuery((query) => creatQueryObject(query, { search }));
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="search..."
        vlaue={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <ImSearch />
      </button>
    </div>
  );
}

export default Searchbox;
