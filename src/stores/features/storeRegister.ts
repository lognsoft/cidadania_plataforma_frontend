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
        updateState(state, action:PayloadAction<Partial<RegisterState>>){
            Object.assign(state, {
                ...action.payload,
                register:{
                    ...state.register,
                    ...(action.payload.register || {})
                }
            })
        }
    }
});

export const { updateState } = registerNewUser.actions;
export default registerNewUser.reducer;

