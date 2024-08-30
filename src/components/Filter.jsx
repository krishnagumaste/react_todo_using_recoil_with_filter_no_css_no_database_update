import { useRecoilState } from "recoil";
import { titleFilterState } from "../store/recoil";

const Filter = () => {
    const [filter, setFilter] = useRecoilState(titleFilterState);

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
