import React from 'react';
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {useForm} from "react-hook-form";
import {useRouter} from "next/navigation";

const FormLogin = () => {
    const router = useRouter();
    const {handleSubmit, register} = useForm()
    function onSubmit(data) {
        console.log(data)
        router.push("/country")
    }
    return (
        <div className="flex">
            <form className={'form form-login'} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={'title-form-h2'}>Login</h2>
                <div>
                    <Label className={'input-wrapper'}>Name*</Label>
                    <Input className={'form-control'} type='text' {...register("name")} placeholder={'Name*'}/>
                </div>
                <div>
                    <Label className={'input-wrapper'}>E-mail*</Label>
                    <Input className={'form-control'} type='email' {...register("email")} placeholder={'E-mail*'}/>
                </div>
                <Button type={'submit'} className={"btn-secondary"}>Logar</Button>
            </form>
        </div>
    );
};

export default FormLogin;
