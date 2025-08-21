// Overall game state (player, opponent, turn)

import React, { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
    const [playerBoard, setPlayerBoard] = useState(
        Array(10).fill(Array(10).fill(null))
    );
    const [opponentBoard, setOpponentBoard] = useState(
        Array(10).fill(Array(10).fill(null))
    );
    const [turn, setTurn] = useState("player"); // player | opponent
    const [money, setMoney] = useState(1000);
    const [equipment, setEquipment] = useState([]);

    const resetGame = () => {
        setPlayerBoard(Array(10).fill(Array(10).fill(null)));
        setOpponentBoard(Array(10).fill(Array(10).fill(null)));
        setTurn("player");
        setMoney(1000);
        setEquipment([]);
    };

    return (
        <GameContext.Provider
            value={{
                playerBoard,
                setPlayerBoard,
                opponentBoard,
                setOpponentBoard,
                turn,
                setTurn,
                money,
                setMoney,
                equipment,
                setEquipment,
                resetGame,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};

export const useGame = () => useContext(GameContext);
