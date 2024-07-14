import { Button, Input, InputNumber, Tabs } from "antd";
import api from "../../api.js";
import RootLayouts from "../../layouts/RootLayouts.jsx";
import { useState } from "react";
import Add_Product from "./add_product.jsx";
import Update_Product from "./update_product.jsx";

export default function ProductsPage() {

    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: 'Add Product',
            children: <Add_Product></Add_Product>,
        },
        {
            key: '2',
            label: 'Update Product',
            children: <Update_Product></Update_Product>,
        },
        {
            key: '3',
            label: 'Tab 3',
            children: 'Content of Tab Pane 3',
        },
    ];


    return (
        <RootLayouts>
        <div className="mt-20 md:mt-32 px-3 min-h-[50%]">
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
        </RootLayouts>
    );
}
