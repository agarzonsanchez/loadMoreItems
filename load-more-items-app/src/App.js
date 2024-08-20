import "./App.css";
import LoadMoreItems from "./components/item-loader";
import "./components/item-loader/index.css";
function App() {
  return (
    <div className="App">
      <LoadMoreItems url={"https://dummyjson.com/products"} />
    </div>
  );
}

export default App;
