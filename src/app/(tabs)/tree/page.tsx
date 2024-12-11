"use client";
import {useRouter, useSearchParams} from "next/navigation";
import {FormEvent, useEffect, useMemo, useState} from "react";

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

    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        router.push('/tree/?etapa=etapa3');
    }

    return (
        <main>
            { etapa === "etapa1" && (
                <div>
                    <h2>Conhece o sujeito?</h2>
                    <div className={''}>
                        <button onClick={() => router.push('/tree/?etapa=etapa2')}>Sim</button>
                        <button onClick={() => router.push('/tree/?etapa=etapa2')}>Não</button>
                    </div>
                </div>
            )}

            { etapa === "etapa2" && (
                <div>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Trisavo
                            <input className={'form-control'} type={'radio'} name={'root'} value={'trisavo'}/>
                        </label>
                        <label>
                            Bisavo
                            <input className={'form-control'} type={'radio'} name={'root'} value={'bisavo'}/>
                        </label>
                        <label>
                            Vo
                            <input className={'form-control'} type={'radio'} name={'root'} value={'vo'}/>
                        </label>
                        <label>
                            Pai
                            <input className={'form-control'} type={'radio'} name={'root'} value={'pai'}/>
                        </label>
                        <button type={'submit'}>Confirmar</button>
                    </form>
                </div>
            )}

            { etapa === "etapa3" && (
                <div>
                    <form className={'form form-tree'}>
                        <label className={'input-wrapper'}>
                            Nome*
                            <input className={'form-control'} type='text' name={'name'} required/>
                        </label>
                        <label className={'input-wrapper'}>
                            Data de nascimento*
                            <input className={'form-control'} type='text' name={'nascimento'} required/>
                        </label>
                        <label className={'input-wrapper'}>
                            Local de nascimento*
                            <input className={'form-control'} type='text' name={'local_nascimento'} required/>
                        </label>
                        <label className={'input-wrapper'}>
                            Certidão de nascimento*
                            <input className={'form-control'} type='text' name={'certidao'} required/>
                        </label>
                        <label className={'input-wrapper'}>
                            Certidão de casamento
                            <input className={'form-control'} type='text' name={'casamento'} required/>
                        </label>
                        <label className={'input-wrapper'}>
                            Obituário
                            <input className={'form-control'} type='text' name={'obito'} required/>
                        </label>
                        <div className={'container-wrapper'}>
                            <h3 className={'title-form-h3'}>Sexo*</h3>
                            <label>
                                Masculíno
                                <input className={'form-control'} type='radio' name={'sexo'} value={'M'} required/>
                            </label>
                            <label>
                                Feminíno
                                <input className={'form-control'} type='radio' name={'sexo'} value={'F'} required/>
                            </label>
                        </div>
                    </form>
                </div>
            )}
        </main>
    )
}

export default TreePage;
