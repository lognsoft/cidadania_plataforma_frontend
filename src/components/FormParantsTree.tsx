import React from 'react';
import {Label} from "@/components/ui/label";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input";
import {useRouter} from "next/navigation";

const FormParantsTree = () => {

    const router = useRouter();

    const { handleSubmit, register } = useForm()
    function onSubmit(data){
        console.log(data)
        router.push('/tree/?etapa=etapa3');
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="form form-parents">
                <div className={'form-group'}>
                    <div className={'flex gap-2 items-center'}>
                        <Label className={'input-wrapper'}>Trisavo</Label>
                        <Input className={''} type="radio" {...register("parent")} value={'trisavo'}/>
                    </div>
                    <div className={'flex gap-2 items-center'}>
                        <Label className={'input-wrapper'}>Bisavo</Label>
                        <Input className={''} type="radio" {...register("parent")} value={'bisavo'}/>
                    </div>
                    <div className={'flex gap-2 items-center'}>
                        <Label className={'input-wrapper'}>Vo</Label>
                        <Input className={''} type="radio" {...register("parent")} value={'vo'}/>
                    </div>
                    <div className={'flex gap-2 items-center'}>
                        <Label className={'input-wrapper'}>Pai</Label>
                        <Input className={''} type="radio" {...register("parent")} value={'pai'}/>
                    </div>
                </div>
                <Button type={'submit'} className={"btn-confirm"}>Confirmar</Button>
            </form>
        </div>
    );
};

export default FormParantsTree;
