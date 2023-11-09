import React, { useEffect, useState } from "react";
const URL = "https://dummyjson.com/products?limit=10&skip=10";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    if (data && data.products) {
      setProducts(data.products);
    }

    //console.log(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>Pagination</div>
      <div
        style={{
          display: "grid",
          padding: "0.5rem",
          margin: "0.5rem",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {products.slice(page * 10 - 10, page * 10).map((product, index) => {
          return (
            <div
              style={{
                backgroundColor: "grey",
                padding: "0.5rem",
                margin: "0.5rem",
                height: "250px",
              }}
              key={product.id}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{ height: "90%", width: "100%" }}
              ></img>
              <span>{product.title}</span>
            </div>
          );
        })}
      </div>
      <div>
        <span
          style={{ cursor: "pointer", opacity: page == 1 ? 0 : 1 }}
          onClick={() => (page > 1 ? setPage(page - 1) : page)}
        >
          ⬅️
        </span>
        {[...new Array(products.length / 10)].map((__, i) => {
          return (
            <span
              onClick={() => setPage(i + 1)}
              style={{
                backgroundColor: page == i + 1 ? "grey" : "",
                padding: "0.5rem",
                cursor: "pointer",
              }}
              key={i}
            >
              {i + 1}
            </span>
          );
        })}
        <span
          style={{
            cursor: "pointer",
            opacity: page === products.length / 10 ? 0 : 1,
          }}
          onClick={() => {
            page < products.length / 10 ? setPage(page + 1) : page;
            //console.log(page);
          }}
        >
          ➡️
        </span>
      </div>
    </>
  );
};

export default Pagination;
