import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type TypeLanguageStore = {
    language: string;
}

const initialState:TypeLanguageStore = {
    language: 'portuguese',
}

const languageStore = createSlice({
    name: 'languages',
    initialState,
    reducers:{
        updateLanguage(store, action:PayloadAction<string>){
            store.language = action.payload;
        }
    }
})

export const { updateLanguage } = languageStore.actions;
export default languageStore.reducer;