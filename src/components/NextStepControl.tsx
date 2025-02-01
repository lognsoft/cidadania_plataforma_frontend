"use client";
import { usePathname } from "next/navigation";
// import NextStepComponent from "./NextStep";
import { useEffect, useState } from "react";
import type INextStepControl from "@/types/INextStepControl";
import { attrObservale } from "@/constants/CStepControl";
import dynamic from "next/dynamic";

const NextStepComponent = dynamic(() => import("@/components/next-step/NextStep"),{ ssr: false });

const NextStepControl = () => {
    const pathname = usePathname();
    const [page, setPage] = useState<INextStepControl>(attrObservale[0]);

    useEffect(() => {

        const newPage: INextStepControl | undefined = attrObservale.find((item) => {
            if(item.path === pathname){
                return item;
            }
        })
        if(newPage !== undefined) setPage(newPage);

    },[pathname]);

    return (
        <NextStepComponent
            text={ pathname === '/register/confirm' ? 'Tudo certo, finalizar.' : 'Continuar' }
            href={ page.nextPath }
            observable={ page.attr }
        />
    )
}

export default NextStepControl