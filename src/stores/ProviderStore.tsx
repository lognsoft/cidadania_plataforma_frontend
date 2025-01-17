"use client";
import { Provider } from "react-redux";
import { store } from "@/stores/store";
import ContainerRegister from "@/components/layouts/ContainerRegister";

type StoreProviderProps = {
    children: React.ReactNode
}

const StoreProvider = ({ children }:StoreProviderProps):React.JSX.Element => {

    return (
        <Provider store={ store }>
            <ContainerRegister>
                { children }
            </ContainerRegister>
        </Provider>
    )
}

export default StoreProvider