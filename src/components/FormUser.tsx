"use client";
import { useSearchParams, useRouter } from "next/navigation";
import {useEffect, useState, useMemo, FormEvent } from "react";
import Link from "next/link";

const FormUser = () => {
    const params = useSearchParams();
    const router = useRouter();

    const [hasParam, setHasParam] = useState<boolean>(false);

    const paramTerm = useMemo(() => params.has("register"), [params]);

    useEffect(() => {
        setHasParam(params.has("register"));
    }, [paramTerm]);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        router.push('/country');
    }

    return (
        <>
            { !hasParam ? (
                <form className={'form form-login'} onSubmit={handleSubmit}>
                    <h2 className={'title-form-h2'}>Login</h2>
                    <label className={'input-wrapper'}>
                        Name*
                        <input className={'form-control'} type='text' name={'name'} placeholder={'Name*'}/>
                    </label>
                    <label className={'input-wrapper'}>
                        E-mail*
                        <input className={'form-control'} type='email' name={'name'} placeholder={'E-mail*'}/>
                    </label>
                    <button type={'submit'}>Entrar</button>
                    <Link href={'/?register'}>Registrar</Link>
                </form>
            ) : (
                <form className={'form form-login'} onSubmit={handleSubmit}>
                    <h2 className={'title-form-h2'}>Registrar</h2>
                    <label className={'input-wrapper'}>
                        Name*
                        <input className={'form-control'} type='text' name={'name'} placeholder={'Name*'}/>
                    </label>
                    <label className={'input-wrapper'}>
                        E-mail*
                        <input className={'form-control'} type='email' name={'name'} placeholder={'E-mail*'}/>
                    </label>
                    <button type={'submit'}>Registrar</button>
                    <Link href={'/'}>Logar</Link>
                </form>
            )}
        </>
    )
}

export default FormUser;
