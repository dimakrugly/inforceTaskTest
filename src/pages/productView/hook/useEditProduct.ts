import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {updateProduct, updateProductDetails} from "../../../store/reducer/productSlice";
import {ProductType} from "../../../store/reducer/productSlice";

export const useEditProduct = (initialProduct: ProductType) => {
    const [isOpen, setIsOpen] = useState(false);
    const [product, setProduct] = useState(initialProduct);
    const dispatch = useDispatch();

    useEffect(() => {
        setProduct(initialProduct);
    }, [initialProduct])

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const handleSave = () => {
        dispatch(updateProduct(product) as any);
        dispatch(updateProductDetails(product));
        handleClose();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setProduct((prevProduct: any) => ({
                ...prevProduct,
                [parent]: {
                    ...prevProduct[parent],
                    [child]: value,
                },
            }));
        } else {
            setProduct((prevProduct: any) => ({
                ...prevProduct,
                [name]: value,
            }));
        }
    };

    return {
        isOpen,
        product,
        handleOpen,
        handleClose,
        handleSave,
        handleChange,
    };
};
