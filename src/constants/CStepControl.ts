import type INextStepControl from "@/types/INextStepControl";

export const attrObservale:INextStepControl[] = [
    {
        path: '/register/country',
        nextPath: '/register/gender',
        attr: 'register.country'
    },
    {
        path: '/register/gender',
        nextPath: '/register/kinship',
        attr: 'register.gender'
    },
    {
        path: '/register/kinship',
        nextPath: '/register/confirm',
        attr: 'register.kinship'
    },
    {
        path: '/register/confirm',
        nextPath: '',
        attr: 'terms'
    }
];