import { configureStore } from "@reduxjs/toolkit";
import registerReduce from "@/stores/features/storeRegister";
import languageStore from "@/stores/features/storeLanguage";

export const store = configureStore({
    reducer:{
        register: registerReduce,
        translate: languageStore
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;