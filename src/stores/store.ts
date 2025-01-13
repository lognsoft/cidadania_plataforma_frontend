import { configureStore } from "@reduxjs/toolkit";
import registerReduce from "@/stores/features/storeRegister";

export const store = configureStore({
    reducer:{
        register: registerReduce
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;