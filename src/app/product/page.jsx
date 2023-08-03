import React from "react";

const getProduct = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.error("gagal fetching data!");
  }
};

const page = async () => {
  const produk = await getProduct();
  return (
    <div>
      <div>
        {/* {Object.values(produk || {}).map((item) => (
          <h1 key={item.id}>{item.title}</h1>
        ))} */}
        <h1>{produk.title}</h1>
      </div>
    </div>
  );
};

export default page;
