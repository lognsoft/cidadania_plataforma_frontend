"use client";
import { useSearchParams, useRouter } from "next/navigation";
import {useEffect, useState, useMemo, FormEvent } from "react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import Image from "next/image";
import FormLogin from "@/components/FormLogin";

const FormUser = () => {
    const params = useSearchParams();
    const router = useRouter();

    const [hasParam, setHasParam] = useState<boolean>(false);

    const paramTerm = useMemo(() => params.has("register"), [params]);

    useEffect(() => {
        setHasParam(params.has("register"));
    }, [paramTerm]);


    return (
        <div className="md:grid-cols-2 grid w-full content-center justify-items-center h-full">
            <div className="">
                <Image src={"/images/3.png"} className="!h-auto !max-w-full" alt="teste" width={200} height={100} />
            </div>
            { !hasParam ? (
                <div className="flex flex-col justify-center w-full max-w-96 gap-2">
                    <Button>
                        <Link href={"/country"}>COMECE AGORA</Link>
                    </Button>
                    <Button>
                        <Link href={"/?register"}>JÁ TENHO UMA CONTA</Link>
                    </Button>
                </div>
            ) : (
                <FormLogin/>
            )}
        </div>
    )
}

export default FormUser;
