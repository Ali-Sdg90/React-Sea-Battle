import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { GameContextProvider } from "./context/GameContext";
import { SoundContextProvider } from "./context/SoundContext";

function App() {
    return (
        <GameContextProvider>
            <SoundContextProvider>
                <AppRoutes />
            </SoundContextProvider>
        </GameContextProvider>
    );
}

export default App;
