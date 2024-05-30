import {ProductList} from "../../components/productList/ProductList";
import {HomePageViewProps} from "./types/HomePageViewProps";
import {AddProductModal} from "../../components/addProductModal/AddProductModal";
import React from "react";
import {RemoveProductModal} from "../../components/removeProductModal/RemoveProductModal";


export const ProductListView: React.FC<HomePageViewProps> = (
    {
        products,
        addProductData,
        removeProductData,
        navigateToProductDetails,
    }) => {
    const {setIsOpen} = addProductData;
    const {handleOpen, handleClose, handleRemoveProduct, isOpen} = removeProductData;

    return (
        <div>
            <h1>Products List:</h1>
            <button onClick={() => setIsOpen(true)}>Add Product</button>
            <ProductList
                products={products}
                handleOpen={handleOpen}
                navigateToProductDetails={navigateToProductDetails}
            />

            <AddProductModal {...addProductData} />
            <RemoveProductModal
                isOpen={isOpen} handleClose={handleClose} handleRemoveProduct={handleRemoveProduct}/>
        </div>
    )
}