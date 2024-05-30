import {useDispatch} from 'react-redux';
import {useState, useCallback} from 'react';
import {removeProduct} from "../../../store/reducer/productSlice";

export const useRemoveProduct = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [productId, setProductId] = useState<number | null>(null);
    const dispatch = useDispatch();

    const handleOpen = (id: number) => {
        setProductId(id);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
        setProductId(null);
    };

    const handleRemoveProduct = useCallback(() => {
        if (productId !== null) {
            dispatch(removeProduct(productId) as any);
            handleClose();
        }
    }, [productId, dispatch]);

    return {
        isOpen,
        handleOpen,
        handleClose,
        handleRemoveProduct,
    };
};
