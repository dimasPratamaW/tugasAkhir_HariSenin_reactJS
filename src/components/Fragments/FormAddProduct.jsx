import React, { useState } from 'react';

const FormAddProduct = ({ onCloseForm, onAddProduct }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCloseForm = () => {
    onCloseForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(formData); 
    handleCloseForm();
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-200 bg-opacity-80 z-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">New Product</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            placeholder="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
          />
          <textarea
            placeholder="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          ></textarea>
          <div className="flex items-center">
            <input
              placeholder="Price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="number"
            />
            <span className="ml-2 text-gray-500">IDR</span>
          </div>
          <div className="flex items-center justify-center gap-5">
            <button
              className="bg-gradient-to-r from-indigo-500 to-tomato-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              type="submit"
            >
              Submit
            </button>
            <button
              onClick={handleCloseForm}
              className="bg-gradient-to-r from-tomato-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-indigo-600 transition ease-in-out duration-150"
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormAddProduct;
