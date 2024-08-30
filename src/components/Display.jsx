import { useRecoilValue } from "recoil";
import { filteredFormState } from "../store/recoil";

const Display = () => {
  const form = useRecoilValue(filteredFormState);

  return (
    <div>
      <ul>
        {form.map((todo, index) => (
          <li key={index}>
            <strong>{todo.title}</strong>: {todo.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Display;
