import React from "react";

const getProduct = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("gagal fetching data!");
  }
};

const page = async () => {
  const produk = await getProduct();
  return (
    <div>
      <div>
        {produk.map((item) => (
          <h1 key={item.id}>{item.title}</h1>
        ))}
        {/* <h1>{produk.title}</h1> */}
      </div>
    </div>
  );
};

export default page;
