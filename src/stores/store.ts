import { configureStore } from "@reduxjs/toolkit";
import storage from "@/stores/storageRegister";

export const store = configureStore({
  reducer: {
    storage: storage,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
