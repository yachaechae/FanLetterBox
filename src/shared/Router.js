import { RootProvider } from "context/rootContext";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {
    return (
    <BrowserRouter>
        <RootProvider>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/detail/:id" element={<Detail/>}/>
            </Routes>
        </RootProvider>
    </BrowserRouter>
    )
}
