import logo from "./logo.svg";
import "./App.css";
import LoadMoreItems from "./components/item-loader";

function App() {
  return (
    <div className="App">
      <LoadMoreItems url={"https://dummyjson.com/products"} />
    </div>
  );
}

export default App;
