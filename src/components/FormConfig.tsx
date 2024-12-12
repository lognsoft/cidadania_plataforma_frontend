"use client";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";

const   FormCountry = () => {
    const router = useRouter();
    const {handleSubmit, register} = useForm();
    function onSubmit(data) {
        console.log(data)
        router.push("/tree");
    }

    return (
        <form className={'form form-country'} onSubmit={handleSubmit(onSubmit)}>
            <div className={'form-group'}>
                <div className={"custom-radio"}>
                    <Label htmlFor={"brazil"}  className={''}>brasil </Label>
                    <Input className={'form-control'} type='radio' {...register("country")} value={'brazil'} id={"brazil"}/>
                </div>
                <div className={"custom-radio"}>
                    <Label htmlFor={"italy"} className={''}>Italia</Label>
                    <Input className={'form-control'} type='radio' {...register("country")} value={'italy'} id={"italy"}/>
                </div>
                <div className={"custom-radio"}>
                    <Label htmlFor={"france"} className={''}>França</Label>
                    <Input className={'form-control'} type='radio' {...register("country")} value={'france'} id={"france"}/>
                </div>
            </div>
            <Button type={'submit'} className={"btn-confirm"}>confirmar</Button>
        </form>
    )
}

export default FormCountry;
