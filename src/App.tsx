import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickFetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => console.log(res));
  };
  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
    </div>
  );
}
