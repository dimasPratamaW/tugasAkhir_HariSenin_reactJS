import { Button, Input, InputNumber, Select, Result, Space } from "antd";
import api from "../../api.js";
import RootLayouts from "../../layouts/RootLayouts.jsx";
import { useState, useEffect } from "react";

const { Option } = Select;

export default function Delete_Product() {
    const initialFormState = {
        product_name: "",
        product_picture: "",
        product_price: null,
    };

    const [formValues, setFormValues] = useState(initialFormState);
    const [isSuccess, setIsSuccess] = useState(false);
    const [products, setProducts] = useState([]);
    const [choosenIdProduct, setChoosenProduct] = useState("");

    const handleSelectChange = (value) => {
        const selectedProduct = products.find(product => product.product_id === value);
        setChoosenProduct(selectedProduct.product_id);
        setFormValues({
            product_name: selectedProduct.product_name,
            product_picture: selectedProduct.product_picture || "", // Handle case where product_picture might not be present
            product_price: selectedProduct.product_price,
        });
    };

    const deleteProduct = async (event) => {
        event.preventDefault();
        console.log(choosenIdProduct, "choosen id product");


        try {
            const response = await api.delete(`/product/${choosenIdProduct}`);
            console.log("API response:", response);

            // Reset form values to initial state
            setFormValues(initialFormState);

            // Set success state to true
            setIsSuccess(true);

            // Fetch updated list of products
            await getAllProduct();
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

    const getAllProduct = async () => {
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
        getAllProduct();
    }, []); // Empty dependency array means this effect runs once on mount

    if (isSuccess) {
        return (
            <Result
                title="Your operation has been executed"
                extra={
                    <Button type="primary" key="console" onClick={() => setIsSuccess(false)}>
                        Delete Another Product
                    </Button>
                }
            />
        );
    }

    return (
        <RootLayouts>
            <div className="mt-5 min-h-[50%]">
                <div className="mb-10">
                    <h2>Products List:</h2>
                    <Select
                        style={{ width: '100%' }}
                        placeholder="Select a product"
                        onChange={handleSelectChange}
                        defaultValue={products.length > 0 ? products[0].product_id : undefined}
                    >
                        {products.map((product) => (
                            <Option key={product.product_id} value={product.product_id}>
                                {product.product_name} - Rp{product.product_price}
                            </Option>
                        ))}
                    </Select>
                    <div className="mt-5 mb-5">

                    <h2>Selected Product Details:</h2>
                    <p><strong>Name:</strong> {formValues.product_name}</p>
                    <p><strong>Price:</strong> Rp{formValues.product_price}</p>
                    <p><strong>Picture:</strong> {formValues.product_picture}</p>
                    </div>
                </div>
                <Space />
                <Button className="bg-[#604058] rounded-md w-full text-white" type="button" onClick={deleteProduct}>Delete Product</Button>
            </div>
        </RootLayouts>
    );
}
