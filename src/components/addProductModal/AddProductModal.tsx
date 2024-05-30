import React from 'react';
import './AddProductModal.css';

export interface AddProductModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    name: string;
    setName: (name: string) => void;
    count: number;
    setCount: (count: number) => void;
    imageUrl: string;
    setImageUrl: (imageUrl: string) => void;
    width: number;
    setWidth: (width: number) => void;
    height: number;
    setHeight: (height: number) => void;
    weight: string;
    setWeight: (weight: string) => void;
    handleAddProduct: () => void;
}

export const AddProductModal: React.FC<AddProductModalProps> = ({
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
                                                                    handleAddProduct,
                                                                }) => {
    return (
        <div>
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Add Product</h2>

                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="count">Count</label>
                        <input
                            id="count"
                            type="number"
                            placeholder="Count"
                            value={count}
                            onChange={(e) => setCount(Number(e.target.value))}
                        />
                        <label htmlFor="img">Image URL</label>
                        <input
                            id="img"
                            type="text"
                            placeholder="Image URL"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                        <label htmlFor="width">Width</label>
                        <input
                            id="width"
                            type="number"
                            placeholder="Width"
                            value={width}
                            onChange={(e) => setWidth(Number(e.target.value))}
                        />
                        <label htmlFor="height">Height</label>
                        <input
                            id="height"
                            type="string"
                            placeholder="Height"
                            value={height}
                            onChange={(e) => setHeight(Number(e.target.value))}
                        />
                        <label htmlFor="weight">Weight</label>
                        <input
                            id="weight"
                            type="number" placeholder="Weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}/>
                        <button onClick={handleAddProduct}>Add</button>
                        <button onClick={() => setIsOpen(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};
