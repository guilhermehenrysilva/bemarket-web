import { Route, Routes, BrowserRouter } from "react-router-dom";
import Products from "./pages/Products";

export default function SwitchRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Products />} />
            </Routes>
        </BrowserRouter>
    )
}