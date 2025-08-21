// Global sound management

import React, { createContext, useContext, useState } from "react";
import { Howl } from "howler";

const SoundContext = createContext();

export const SoundContextProvider = ({ children }) => {
    const [sounds, setSounds] = useState({});

    const loadSound = (key, src) => {
        setSounds((prev) => ({
            ...prev,
            [key]: new Howl({ src }),
        }));
    };

    const playSound = (key) => {
        if (sounds[key]) sounds[key].play();
    };

    return (
        <SoundContext.Provider value={{ sounds, loadSound, playSound }}>
            {children}
        </SoundContext.Provider>
    );
};

export const useSound = () => useContext(SoundContext);
