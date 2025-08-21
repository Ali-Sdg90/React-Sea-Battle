import { Routes, Route } from "react-router-dom";
import MenuPage from "../pages/MenuPage";
import BuyPage from "../pages/BuyPage";
import GamePage from "../pages/GamePage";
import ResultPage from "../pages/ResultPage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MenuPage />} />
            <Route path="/buy" element={<BuyPage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/result" element={<ResultPage />} />
        </Routes>
    );
}
