import { Routes, Route } from "react-router-dom";
import MenuPage from "../pages/MenuPage";
import BuyPage from "../pages/BuyPage";
import GamePage from "../pages/GamePage";
import ResultPage from "../pages/ResultPage";
import NotFoundPage from "../pages/NotFoundPage";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function AppRoutes() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<MenuPage />} />
                <Route path="/buy" element={<BuyPage />} />
                <Route path="/game" element={<GamePage />} />
                <Route path="/result" element={<ResultPage />} />

                <Route path="*" element={<NotFoundPage />} />
            </Routes>

            <Footer />
        </>
    );
}
