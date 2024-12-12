import React from 'react';
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";

const FormFamilyTree = () => {
    const { handleSubmit, register } = useForm()

    function onSubmit(data) {
        console.log(data)
    }

    return (
        <div>
            <form className={'form form-tree'} onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full flex flex-col gap-2.5">
                    <Label className={'input-wrapper'}>Nome*</Label>
                    <Input className={'form-control'} type='text' {...register("name")} required />
                </div>
                <div className="w-full flex flex-col gap-2.5">
                    <Label className={'input-wrapper'}>Data de nascimento*</Label>
                    <Input className={'form-control'} type='text' {...register("nascimento") }  required/>
                </div>
                <div className="w-full flex flex-col gap-2.5">
                    <Label className={'input-wrapper'}>Local de nascimento*</Label>
                    <Input className={'form-control'} type='text' {...register("local_nascimento")} required/>
                </div>
                <div className="w-full flex flex-col gap-2.5">
                    <Label className={'input-wrapper'}>Certidão de nascimento*</Label>
                    <Input className={'form-control'} type='text' {...register("certidao_nascimento")} required/>
                </div>
                <div className="w-full flex flex-col gap-2.5">
                    <Label className={'input-wrapper'}>Certidão de casamento</Label>
                    <Input className={'form-control'} type='text' {...register("casamento_casamento") } required/>
                </div>
                <div className="w-full flex flex-col gap-2.5">
                    <Label className={'input-wrapper'}>Obituário</Label>
                    <Input className={'form-control'} type='text' {...register("obito")} required/>
                </div>
                <div className={'container-wrapper'}>
                    <h3 className={'title-form-h3'}>Sexo*</h3>
                    <div className={'form-group'}>
                        <div className="flex gap-2 items-center">
                            <Label className={'input-gender'}>Masculíno</Label>
                            <Input className={''} type="radio" {...register("genero")}  value={'M'} required/>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Label className={'input-gender'}>Feminíno</Label>
                            <Input className={''} type="radio" {...register("genero")} value={'F'} required/>
                        </div>
                    </div>
                </div>
                <Button type={"submit"}>Submit</Button>
            </form>
        </div>
    );
};

export default FormFamilyTree;
