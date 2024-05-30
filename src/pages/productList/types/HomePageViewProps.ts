import {ProductType} from "../../../store/reducer/productSlice";
import {AddProductModalProps} from "../../../components/addProductModal/AddProductModal";
import {RemoveProductModalProps} from "../../../components/removeProductModal/RemoveProductModal";

export interface HomePageViewProps {
    products: ProductType[];
    addProductData: AddProductModalProps;
    removeProductData: any;
    navigateToProductDetails: (id: number)=> void;
}