import React, { useEffect, useState } from "react";
import api from "../../api.js";

export default function ListItem({ onClick }) {
  const [products, setProducts] = useState([]);

  const itemsInStore = async () => {
    console.log("Fetching all products");

    const id_user = "325ef718-4574-447f-8849-839f91af2b39";

    try {
      console.log("Making API request with:");
      const response = await api.get(`/product/allproduct/${id_user}`);
      console.log("API response:", response);

      // Update state with fetched products
      setProducts(response.data);
    } catch (error) {
      if (error.response) {
        console.error("API response error:", error.response.data);
        console.error("Status:", error.response.status);
        console.error("Headers:", error.response.headers);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up request:", error.message);
      }
    }
  };

  useEffect(() => {
    itemsInStore();
  }, []);

  return (
    <div className="grid grid-cols-4">
      {products.map((item) => (
        <button key={item.product_id} className="flex-col bg-white pb-4 p-2 text-left mx-1 my-1" onClick={() => onClick(item)}>
          <p className="font-bold">{item.product_name}</p>
          <p className="text-[#724b68] font-bold">Rp{item.product_price}</p>
        </button>
      ))}
    </div>
  );
}
