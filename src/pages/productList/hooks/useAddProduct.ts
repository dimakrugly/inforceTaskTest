import {useDispatch} from 'react-redux';
import {addProduct, ProductType} from "../../../store/reducer/productSlice";
import {useState} from 'react';


export const useAddProduct = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);
    const [imageUrl, setImageUrl] = useState('');
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState('');

    const dispatch = useDispatch();

    const handleAddProduct = () => {
        const newProduct: ProductType = {
            id: Date.now(),
            name,
            count,
            imageUrl,
            size: {width, height},
            weight,
            comments: []
        };
        dispatch(addProduct(newProduct) as any);
        setIsOpen(false);
    };

    return {
        isOpen,
        setIsOpen,
        name,
        setName,
        count,
        setCount,
        imageUrl,
        setImageUrl,
        width,
        setWidth,
        height,
        setHeight,
        weight,
        setWeight,
        handleAddProduct
    };
};
