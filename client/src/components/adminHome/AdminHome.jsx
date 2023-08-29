import React, { useState } from 'react';
import './AdminHome.css'

function AdminHome() {

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token from localStorage
  };

  const dummyProducts = [
    { id: 1, name: 'Product 1', brand: 'Brand A', image: 'product1.jpg', price: '$100' },
    { id: 2, name: 'Product 1', brand: 'Brand A', image: 'product1.jpg', price: '$100' },
    { id: 3, name: 'Product 1', brand: 'Brand A', image: 'product1.jpg', price: '$100' },
    { id: 4, name: 'Product 1', brand: 'Brand A', image: 'product1.jpg', price: '$100' },
  ];

  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="user-info">
          <p>User Email: user@example.com</p> {/* Replace with actual user email */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
      <div className="product-list">
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Image</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {dummyProducts.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td><img src={product.image} alt={product.name} /></td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="add-product">
        <button>Add New Product</button>
      </div>
    </div>
  );
}

export default AdminHome;
