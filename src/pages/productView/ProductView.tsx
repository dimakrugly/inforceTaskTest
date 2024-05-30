import React from 'react';
import './ProductView.css';
import {ProductType} from "../../store/reducer/productSlice";
import {useEditProduct} from "./hook/useEditProduct";
import {EditProductModal} from "../../components/editProductModal/EditProductModal";
import {selectProductDetails} from "../../store/selectors/product";
import {useSelector} from "react-redux";
import {useProductData} from "./hook/useProductView";
import Comments from "../../components/comments/Comments";

const ProductView = () => {
    const product: ProductType = useSelector(selectProductDetails);
    const {isOpen, handleOpen, handleClose, handleSave, handleChange, product: editedProduct} = useEditProduct(product);
    const {comments} = useProductData();

    return (
        <div className="product-view">
            <img src={product.imageUrl} alt={product.name} className="product-view-image"/>
            <div className="product-view-details">
                <h1>{product.name}</h1>
                <p><strong>Count:</strong> {product.count}</p>
                <p><strong>Size:</strong> {product.size.width}x{product.size.height}</p>
                <p><strong>Weight:</strong> {product.weight}</p>

                <button onClick={() => handleOpen()}>Edit Product</button>
            </div>
            <Comments comments={comments}/>
            <EditProductModal
                isOpen={isOpen}
                handleClose={handleClose}
                handleSave={handleSave}
                product={editedProduct}
                handleChange={handleChange}
            />


        </div>
    );
};

export default ProductView;
