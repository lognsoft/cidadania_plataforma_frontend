"use client";
import { useSelector, useDispatch } from "react-redux";
import { type RootState, type AppDispatch } from "@/stores/store";
import CheckRegister from "@/components/CheckRegister";
import { updateState } from "@/stores/features/storeRegister";
import BulletCheck from "@/components/icons/BulletCheck";
import Link from "next/link";
import Image from "next/image";
import IconLink from "@/components/icons/IconLink";

export default function ConfirmRegisterPage(){
    const state = useSelector((rootState:RootState) => rootState.register);
    const dispatch = useDispatch<AppDispatch>();


    function confirmTerms(){
        const newValueTerm = !state.terms
        dispatch(updateState({
            terms: newValueTerm
        }))
    }

    return (
        <div className="register-page">
            <div className="flex flex-col gap-3 mb-5">
                <CheckRegister label="Cidadania:">{ state.register.country }</CheckRegister>

                <CheckRegister label="Sexo da descendência:">{ state.register.gender }</CheckRegister>

                <CheckRegister label="Grau de parentesco:">{ state.register.kinship }</CheckRegister>
            </div>

            <div className="px-2">
                <button onClick={confirmTerms} className="font-bold flex items-center gap-3 mb-2">
                    <BulletCheck check={ state.terms }/>
                    <span className="block">Eu aceito os Termos de serviço</span>
                </button>
                <div className="px-8">
                    <Link href="#" className="text-mini flex items-center gap-1 hover:underline">
                        &gt; Ler Termos
                        <IconLink/>
                    </Link>
                </div>
            </div>
        </div>
    )
}