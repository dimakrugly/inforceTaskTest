import React from 'react';
import './EditProductModal.css';
import {ProductType} from "../../store/reducer/productSlice";

export interface Comment {
    id: number;
    productId: number;
    description: string;
    date: string;
}

export interface EditProductModalProps {
    isOpen: boolean;
    handleClose: () => void;
    handleSave: (product: ProductType) => void;
    product: ProductType;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const EditProductModal: React.FC<EditProductModalProps> = ({
                                                                      isOpen,
                                                                      handleClose,
                                                                      handleSave,
                                                                      product,
                                                                      handleChange,
                                                                  }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Edit Product</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={product.name}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="count"
                    placeholder="Count"
                    value={product.count}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="imageUrl"
                    placeholder="Image URL"
                    value={product.imageUrl}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="width"
                    placeholder="Width"
                    value={product.size.width}
                    onChange={(e) => handleChange({...e, target: {...e.target, name: 'size.width'}})}
                />
                <input
                    type="number"
                    name="height"
                    placeholder="Height"
                    value={product.size.height}
                    onChange={(e) => handleChange({...e, target: {...e.target, name: 'size.height'}})}
                />
                <input
                    type="text"
                    name="weight"
                    placeholder="Weight"
                    value={product.weight}
                    onChange={handleChange}
                />
                <button onClick={() => handleSave(product)}>Save</button>
                <button onClick={handleClose}>Cancel</button>
            </div>
        </div>
    );
};
