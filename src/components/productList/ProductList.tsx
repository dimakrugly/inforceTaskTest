import React from 'react';
import './ProductList.css';
import {ProductType} from "../../store/reducer/productSlice";

interface ProductListProps {
    products: ProductType[];
    handleOpen: (id: number) => void;
    navigateToProductDetails: (id: number) => void;
}

export const ProductList: React.FC<ProductListProps> = ({products, handleOpen, navigateToProductDetails}) => {

    return (
        <div className="product-list">
            {products.map(product => (
                <div className="product-item" key={product.id} onClick={() => navigateToProductDetails(product.id)}>
                    <img src={product.imageUrl} alt={product.name}/>
                    <h2>{product.name}</h2>
                    <p>Count: {product.count}</p>
                    <button
                        className="productList__button"
                        onClick={e => {
                            e.stopPropagation();
                            handleOpen(product.id);
                        }}
                    >
                        Delete Item
                    </button>
                </div>
            ))}
        </div>
    );
};

