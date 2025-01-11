"use client";
import { usePathname } from "next/navigation";
import NextStepComponent from "./NextStep";
import { useState } from "react";

const attrObservale:{ path:string, nextPath:string, attr:string }[] = [
    {
        path: '/register/country',
        nextPath: '/register/gender',
        attr: 'register.country'
    }
];
const NextStepControl = () => {
    const [page, setPage] = useState<{ path:string, nextPath:string, attr:string }>(attrObservale[0]);
    const pathname = usePathname();



    return (
        <NextStepComponent
            text={ pathname === '/register/confirm' ? 'Tudo certo, finalizar.' : 'Continuar' }
            href={ page.nextPath }
            observable={ page.attr }
        />
    )
}

export default NextStepControl