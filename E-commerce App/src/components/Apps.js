import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App";
import Cart from "./Cart";
const Apps = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Apps