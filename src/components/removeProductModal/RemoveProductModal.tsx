import React from 'react';
import './RemoveProductModal.css';

export interface RemoveProductModalProps {
    isOpen: boolean;
    handleClose: () => void;
    handleRemoveProduct: () => void;
}

export const RemoveProductModal: React.FC<RemoveProductModalProps> = ({
                                                                          isOpen,
                                                                          handleClose,
                                                                          handleRemoveProduct,
                                                                      }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Confirm Removal</h2>
                <p>Are you sure you want to delete this product?</p>
                <button className="btn btn-confirm" onClick={handleRemoveProduct}>Delete</button>
                <button className="btn btn-cancel" onClick={handleClose}>Cancel</button>
            </div>
        </div>
    );
};
