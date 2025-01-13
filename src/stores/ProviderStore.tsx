"use client";
import { Provider } from "react-redux";
import { store } from "@/stores/store";

type StoreProviderProps = {
    children: React.ReactNode
}

const StoreProvider = ({ children }:StoreProviderProps):React.JSX.Element => {
    return <Provider store={ store }>{ children }</Provider>
}

export default StoreProvider