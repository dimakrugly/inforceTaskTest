import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import {ProductList} from "./pages/productList/ProductList";
import {Provider} from 'react-redux'
import {store} from "./store/store";
import ProductView from "./pages/productView/ProductView";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Router>
                    <Routes>
                        <Route path='/' element={<ProductList/>}/>
                        <Route path={`/product-view`} element={<ProductView/>}/>
                        <Route path='*' element={<h1>Not Found</h1>}/>
                    </Routes>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
