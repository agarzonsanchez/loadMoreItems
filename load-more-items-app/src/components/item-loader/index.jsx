import { useEffect, useState } from "react";

export default function LoadMoreItems({ url }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [moreItem, setMoreItems] = useState(20);
  async function fetchDataItems() {
    try {
      setLoading(true);

      const response = await fetch(`${url}?limit=${moreItem}`);
      const dataItem = await response.json();
      console.log(dataItem);
      setProducts(dataItem.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  function handleMoreItems(e) {
    if (moreItem < 100) {
      setMoreItems(moreItem + 20);
    }
  }

  function handleRestar() {
    setMoreItems(20);
  }

  useEffect(() => {
    fetchDataItems();
  }, [moreItem]);
  if (loading) return <h1>Loading... Please wait!</h1>;
  return (
    <div>
      <div>
        <h1 className="app-title">Load More Item App</h1>
      </div>
      <div className="card-wrapper">
        {products && products.length > 0
          ? products.map((item) => (
              <div key={item.id} className="card-container">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  style={{ width: "150px" }}
                />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p className="price-tag">$ {item.price}</p>
              </div>
            ))
          : null}
      </div>
      <button onClick={handleMoreItems} className="button-load">
        Load More Items
      </button>
      <button onClick={handleRestar} className="button-load">
        Restart
      </button>
    </div>
  );
}
