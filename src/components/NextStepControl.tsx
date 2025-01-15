"use client";
import { usePathname } from "next/navigation";
import NextStepComponent from "./NextStep";
import { useEffect, useState } from "react";

const attrObservale:INextStepControl[] = [
    {
        path: '/register/country',
        nextPath: '/register/gender',
        attr: 'register.country'
    },
    {
        path: '/register/gender',
        nextPath: '/register/kinship',
        attr: 'register.gender'
    },
    {
        path: '/register/kinship',
        nextPath: '/register/confirm',
        attr: 'register.kinship'
    },
    {
        path: '/register/confirm',
        nextPath: '/register/confirm',
        attr: 'terms'
    }
];
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