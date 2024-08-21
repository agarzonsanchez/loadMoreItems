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

  function handleMoreItems() {
    if (moreItem < 100) {
      setMoreItems(moreItem + 20);
    }
  }

  useEffect(() => {
    fetchDataItems();
  }, [moreItem]);
  if (loading) return <h1>Loading... Please wait!</h1>;
  return (
    <div>
      <div className="card-wrapper">
        {products && products.length > 0
          ? products.map((item) => (
              <div className="card-container">
                <img
                  src={item.images}
                  alt={item.title}
                  style={{ width: "300px" }}
                />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p className="price-tag">$ {item.price}</p>
              </div>
            ))
          : null}
      </div>
      <button onClick={handleMoreItems}>Load More Items</button>
    </div>
  );
}
