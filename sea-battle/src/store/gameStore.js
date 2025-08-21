// Player grid, opponent grid, equipment, score

import create from "zustand";

export const useGameStore = create((set) => ({
    playerGrid: [],
    opponentGrid: [],
    equipment: [],
    score: 0,
    setPlayerGrid: (grid) => set({ playerGrid: grid }),
    setOpponentGrid: (grid) => set({ opponentGrid: grid }),
}));
