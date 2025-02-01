"use client";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "@/stores/store";
import { verifyStorageRegister } from "@/stores/features/storeRegister";
import { verifyStoreValue } from "@/lib/verifyStoreValue";
import { sleep } from "@/lib/sleep";
import { useRouter } from "next/navigation";
interface IContainerRegister{
    children: React.ReactNode;
}

const ContainerRegister = ({ children }:IContainerRegister) => {
    const router = useRouter();
    const stateRegister = useSelector((rootState:RootState) => rootState.register);
    const dispatch = useDispatch<AppDispatch>()
    const hasRedirect = useRef<boolean>(false);

    function loadingStateStorage(){
        let definedInputs:number = 0;
        if(verifyStoreValue(stateRegister.howDidYouFind)) definedInputs++;
        if(verifyStoreValue(stateRegister.register.country)) definedInputs++;
        if(verifyStoreValue(stateRegister.register.gender)) definedInputs++;
        if(verifyStoreValue(stateRegister.register.kinship)) definedInputs++;
        if(verifyStoreValue(stateRegister.terms)) definedInputs++;

        redirectPage(definedInputs)
    }

    function redirectPage(inputs:number){
        if(inputs > 0){
            
            switch(inputs){
                case 1:
                    router.push('/register/country');
                    break;
                case 2:
                    router.push('/register/gender');
                    break;
                case 3:
                    router.push('/register/kinship');
                    break;
                default:
                    router.push('/register/confirm');
                    break;
            }
        }
    }

    useEffect(() => {
        dispatch(verifyStorageRegister());
    },[dispatch]);

    useEffect(() => {
        if(!hasRedirect.current){
            hasRedirect.current = true;
            loadingStateStorage();
        }
    },[stateRegister]);

    return (
        <>
            { children }
        </>
    )
}

export default ContainerRegister;