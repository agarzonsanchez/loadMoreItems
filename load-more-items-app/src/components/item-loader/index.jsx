import { useEffect, useState } from "react";

export default function LoadMoreItems({ url }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  async function fetchDataItems() {
    try {
      setLoading(true);

      const response = await fetch(`${url}?limit=20&skip=0`);
      const dataItem = await response.json();
      console.log(dataItem);
      setProducts(dataItem);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchDataItems();
  }, []);
  if (loading) return <>Loading... Please wait!</>;
  return <>Hello World</>;
}
