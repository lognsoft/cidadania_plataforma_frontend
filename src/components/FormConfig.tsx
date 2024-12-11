"use client";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const FormCountry = () => {
    const router = useRouter();

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        router.push("/tree");
    }

    return (
        <form className={'form form-country'} onSubmit={handleSubmit}>
            <label className={'input-wrapper'}>
                brasil
                <input className={'form-control'} type='radio' name={'country'} value={'brazil'}/>
            </label>
            <label className={'input-wrapper'}>
                Italia
                <input className={'form-control'} type='radio' name={'country'} value={'italy'}/>
            </label>
            <label className={'input-wrapper'}>
                França
                <input className={'form-control'} type='radio' name={'country'} value={'france'}/>
            </label>
            <button type={'submit'}>confirmar</button>
        </form>
    )
}

export default FormCountry;
