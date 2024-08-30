import { useRecoilState } from "recoil";
import { filterState } from "../store/recoil";

const Filter = () => {
    const [filter, setFilter] = useRecoilState(filterState);

  return (
    <div>
      <span>Filter : </span>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
