import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Home } from "../Home/Home";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Products } from "../Products/Products";

export const PublicRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>} />       
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/services" element={<Products/>} />
                </Route>
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
        </>
        );
    };