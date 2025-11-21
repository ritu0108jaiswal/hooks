import React, { useState, useEffect } from "react";

function FetchProducts() {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(false);
  const [sorting, setSorting] = useState("asc");

  useEffect(() => {
    const apiUrl = `https://fakestoreapi.com/products?sort=${sorting}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setProductList(data);
        console.log("data", data);
      })
      .catch((err) => {
        setError(true);
      });
  }, [sorting]);
  if (error) {
    return <p>Api error</p>;
  }
  const handleSorting = (e) => {
    setSorting(e.target.value);
  };
  return (
    <div className="mt-10 p-6 bg-white shadow-lg text-left">
      <h2>Product List</h2>
      <select
        value={sorting}
        onChange={handleSorting}
        className="border px-3 py-2"
      >
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
      <ul>
        {productList.map((item) => (
          <li key={item.id}>{item.title} </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchProducts;
