import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Home from './pages/Home';
import Amazon from "./pages/Amazon";
import FIFA from "./pages/FIFA";
import Netflix from "./pages/Netflix";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/amazon" element={<Amazon />} />
                <Route path="/fifa" element={<FIFA />} />
                <Route path="/netflix" element={<Netflix />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}