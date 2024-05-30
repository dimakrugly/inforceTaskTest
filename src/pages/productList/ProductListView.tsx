import {ProductList} from "../../components/productList/ProductList";
import {HomePageViewProps} from "./types/HomePageViewProps";
import {AddProductModal} from "../../components/addProductModal/AddProductModal";
import React, {useCallback} from "react";
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

    const onSetIsOpen = useCallback(()=>{
        setIsOpen(true)
    }, []);

    return (
        <div>
            <h1>Products List:</h1>
            <button onClick={onSetIsOpen}>Add Product</button>
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