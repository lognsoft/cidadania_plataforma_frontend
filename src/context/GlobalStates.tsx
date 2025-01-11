"use client";

import { createContext, useContext, useState } from "react";

// Define o tipo para o estado global
export type GlobalState = {
    howDidYouFind: string;
    register: {
        country: string | undefined;
        gender: "M" | "F" | "IDK" | undefined;
        kinship: string | undefined;
    };
};

// Estado inicial
const initialGlobalState: GlobalState = {
    howDidYouFind: "",
    register: {
        country: undefined,
        gender: undefined,
        kinship: undefined,
    },
};

// Criação do contexto
const GlobalStateContext = createContext<{
    state: GlobalState;
    updateState: (newState: Partial<GlobalState>) => void;
}>({
    state: initialGlobalState,
    updateState: () => {},
});

// Hook para consumir o contexto
export const useGlobalState = () => {
    const context = useContext(GlobalStateContext);

    if (!context) {
        throw new Error(
            "useGlobalState deve ser usado dentro de um GlobalStateProvider"
        );
    }

    return context;
};

// Provedor para o estado global
export const GlobalStateProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = useState<GlobalState>(initialGlobalState);

    // Função para atualizar o estado global
    const updateState = (newState: Partial<GlobalState>) => {
        setState((prevState) => ({
            ...prevState,
            ...newState,
            register: {
                ...prevState.register,
                ...(newState.register || {}),
            },
        }));
    };

    return (
        <GlobalStateContext.Provider value={{ state, updateState }}>
            {children}
        </GlobalStateContext.Provider>
    );
};
