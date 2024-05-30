import {ProductListView} from "./ProductListView";
import {useHome} from "./hooks/useHome";
import {useAddProduct} from "./hooks/useAddProduct";
import {useRemoveProduct} from "./hooks/useRemoveProduct";

export const ProductList = () => {
    const {products, navigateToProductDetails} = useHome();


    const {...addProductData} = useAddProduct();
    const {...removeProductData} = useRemoveProduct()

    return (
        <ProductListView
            products={products}
            addProductData={addProductData}
            removeProductData={removeProductData}
            navigateToProductDetails={navigateToProductDetails}
        />
    )
}