"use client";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const   FormCountry = () => {
    const router = useRouter();

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        router.push("/tree");
    }

    return (
        <form className={'form form-country'} onSubmit={handleSubmit}>
            <div className={'form-group'}>
                <div className={"custom-radio"}>
                    <label htmlFor={"brazil"}  className={''}>brasil </label>
                    <input className={'form-control'} type='radio' name={'country'} value={'brazil'} id={"brazil"}/>
                </div>
                <div className={"custom-radio"}>
                    <label htmlFor={"italy"} className={''}>Italia</label>
                    <input className={'form-control'} type='radio' name={'country'} value={'italy'} id={"italy"}/>
                </div>
                <div className={"custom-radio"}>
                    <label htmlFor={"france"} className={''}>França</label>
                    <input className={'form-control'} type='radio' name={'country'} value={'france'} id={"france"}/>
                </div>
            </div>
            <button type={'submit'} className={"btn-confirm"}>confirmar</button>
        </form>
    )
}

export default FormCountry;
