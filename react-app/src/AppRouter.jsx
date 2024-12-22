import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Login";
import Home from "./pages/Home";
import App from "./App";
import Register from "./pages/Register";

export default function AppRouter() {
    return <BrowserRouter>
        <Routes>
            <Route element={<App />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>
        </Routes>
    </BrowserRouter>
}