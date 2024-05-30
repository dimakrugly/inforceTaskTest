import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../../store/store";
import {selectProducts} from "../../../store/selectors/product";
import {useEffect} from "react";
import {
    fetchProducts,
    addProduct,
    removeProduct,
    ProductType,
    setProductDetails
} from "../../../store/reducer/productSlice";
import {useNavigate} from "react-router-dom";

//TODO dispatch

export const useHome = () => {
    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector(selectProducts);
    const navigation = useNavigate();
    const navigateToProductDetails = (id: number) => {
        dispatch(setProductDetails(id));
        navigation('product-view')
    }

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleAddProduct = async (newProduct: ProductType) => {
        await dispatch(addProduct(newProduct));
    };

    const handleRemoveProduct = async (productId: number) => {
        await dispatch(removeProduct(productId));
    };

    return {
        products,
        handleAddProduct,
        handleRemoveProduct,
        navigateToProductDetails,
    };
};
