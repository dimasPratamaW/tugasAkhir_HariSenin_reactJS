import { Button, Input, InputNumber, Result } from "antd";
import api from "../../api.js";
import RootLayouts from "../../layouts/RootLayouts.jsx";
import { useState } from "react";

export default function Add_Product() {
    const initialFormState = {
        product_name: "",
        product_picture: "",
        product_price: null,
    };

    const [formValues, setFormValues] = useState(initialFormState);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handlePriceChange = (value) => {
        setFormValues({
            ...formValues,
            product_price: value,
        });
    };

    const addingProduct = async (event) => {
        event.preventDefault();
        console.log("Form submitted"); // Check if this log appears

        const id_user = "325ef718-4574-447f-8849-839f91af2b39";

        try {
            console.log("Making API request with:", { ...formValues, id_user });
            const response = await api.post("/product", { ...formValues, id_user });
            console.log("API response:", response);

            // Reset form values to initial state
            setFormValues(initialFormState);

            // Set success state to true
            setIsSuccess(true);
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

    if (isSuccess) {
        return (
            <Result
                status="success"
                title="Your product got added"
                extra={
                    <Button type="primary" key="console" onClick={() => setIsSuccess(false)}>
                        Add Another Product
                    </Button>
                }
            />
        );
    }

    return (
        <RootLayouts>
            <div className="mt-5 min-h-[50%]">
                <form onSubmit={addingProduct}>
                    <Input
                        size="large"
                        placeholder="Name of Product"
                        name="product_name"
                        value={formValues.product_name}
                        onChange={handleInputChange}
                    />
                    <Input
                        size="large"
                        placeholder="Link to Product Picture"
                        name="product_picture"
                        value={formValues.product_picture}
                        onChange={handleInputChange}
                    />
                    <InputNumber
                        className="w-max"
                        size="large"
                        placeholder="100XXX"
                        name="product_price"
                        value={formValues.product_price}
                        onChange={handlePriceChange}
                    />
                    <h1>HALO INI TESTING</h1>
                    <Button className="bg-[#604058] rounded-md w-full" type="submit" onClick={addingProduct}>Add Your Product</Button>
                </form>
            </div>
        </RootLayouts>
    );
}
