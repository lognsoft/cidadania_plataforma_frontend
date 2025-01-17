import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type RegisterState = {
    howDidYouFind: string;
    register: {
        country: string | undefined;
        gender: "M" | "F" | "IDK" | undefined;
        kinship: string | undefined;
    };
    terms: boolean
};

const initialState:RegisterState = {
    howDidYouFind: "",
    register: {
        country: undefined,
        gender: undefined,
        kinship: undefined,
    },
    terms: false
}

const registerNewUser = createSlice({
    name: 'register',
    initialState,
    reducers:{
        updateState(state:RegisterState, action:PayloadAction<Partial<RegisterState>>){
            Object.assign(state, {
                ...action.payload,
                register:{
                    ...state.register,
                    ...(action.payload.register || {})
                }
            })

            localStorage.setItem("register", JSON.stringify(state));
        },
        verifyStorageRegister(state:RegisterState){
            const registerStorage:string | null = localStorage.getItem("register");
            
            if(registerStorage){
                const registerState:RegisterState = JSON.parse(registerStorage);
                state.howDidYouFind = registerState.howDidYouFind;
                state.register = registerState.register;
                state.terms = registerState.terms;
            }
        }
    }
});

export const { updateState, verifyStorageRegister } = registerNewUser.actions;
export default registerNewUser.reducer;

