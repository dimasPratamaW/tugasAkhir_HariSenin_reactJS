import React, { useState, useEffect } from 'react';
import CardProduct from "../components/Fragments/CardProduct";
import Delete from '../components/Elements/Button/Delete';
import AddItems from '../components/Elements/Button/AddData';
import FormAddProduct from '../components/Fragments/FormAddProduct';



const ProductsPage = () => {
    
    const [data, setData] = useState([]);
    const [showInput, setShowInput] = useState(false); 

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json.slice(0, 3))) 
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const truncateTitle = (title) => {
        const words = title.split(' ');
        const truncatedWords = words.slice(0, 4);
        const truncatedTitle = truncatedWords.join(' ');
        return truncatedTitle;
    };
    

    const truncateBody = (body) => {
        if (!body) return ''; 
        const words = body.split(' ');
        const truncatedWords = words.slice(0, 10);
        const truncatedBody = truncatedWords.join(' ');
        return truncatedBody;
    };
    

    const handleAddClick = () => {
        setShowInput(true); 
    };

    const handleAddProduct = (product) => {
        setData([...data, {
            id: data.length + 1,
            title: product.title,
            body: product.description, 
            price: product.price 
        }]);
    };
    return (
        <div className="flex flex-wrap justify-center py-5">
            {showInput && <FormAddProduct onAddProduct={handleAddProduct} onCloseForm={() => setShowInput(false)} />} 
            {data.map(product => (
            <CardProduct key={product.id} className="my-4 mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <CardProduct.CardHeader link="#" image="/images/jacket2.jpg" alter="jacket1"/>
                <CardProduct.CardBody title={truncateTitle(product.title)} >
                    {truncateBody(product.body)}
                </CardProduct.CardBody>
                <CardProduct.CardFooter price={product.price} /> 
            </CardProduct>
        ))}

            <div className="fixed bottom-0 w-full py-10 mx-10 bg-gray-900 flex justify-center items-center">
                <div className="flex justify-center items-center gap-4">
                    <AddItems onClick={handleAddClick} />
                    <Delete />
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;