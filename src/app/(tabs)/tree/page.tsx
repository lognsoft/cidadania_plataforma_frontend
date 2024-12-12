"use client";
import {useRouter, useSearchParams} from "next/navigation";
import {FormEvent, useEffect, useMemo, useState} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Checkbox} from "@/components/ui/checkbox";
import FormFamilyTree from "@/components/FormFamilyTree";
import FormParantsTree from "@/components/FormParantsTree";

const TreePage = () => {
    const router = useRouter();
    const params = useSearchParams();


    const paramsMemo:string | null = useMemo(() => params.get("etapa"), [params]);

    const [etapa, setEtapa] = useState<string>("etapa1");

    useEffect(() => {
        if(params.has("etapa")){
            const etapa:string | null = params.get("etapa");
            if(etapa && (etapa === "etapa1" || etapa === "etapa2" || etapa === "etapa3")){
                setEtapa(etapa);
                return
            };
        }
    }, [paramsMemo]);


    return (
        <main>
            { etapa === "etapa1" && (
                <div className={''}>
                    <h2>Conhece o sujeito?</h2>
                    <div className={'sujeito-confirm'}>
                        <Button onClick={() => router.push('/tree/?etapa=etapa2')} className={"btn-confirm"}>Sim</Button>
                        <Button onClick={() => router.push('/tree/?etapa=etapa3pnpm dlx shadcn@latest init\n')} className={"btn-secondary"}>Não</Button>
                    </div>
                </div>
            )}

            { etapa === "etapa2" && (
                <FormParantsTree/>
            )}

            { etapa === "etapa3" && (
                <FormFamilyTree/>
            )}
        </main>
    )
}

export default TreePage;
