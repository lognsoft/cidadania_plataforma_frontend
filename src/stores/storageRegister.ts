import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StateStore = {
  meetHow: string;
  country: string;
  genre: "male" | "female" | "i don't know" | "";
  degreeOfKinship: string;
  acceptTerms: boolean;
};

const initialState: StateStore = {
  meetHow: "",
  country: "",
  genre: "",
  degreeOfKinship: "",
  acceptTerms: false,
};

export const useStorage = createSlice({
  name: "store-register",
  initialState,
  reducers: {
    registerInfo: <K extends keyof StateStore>(
      state: StateStore,
      action: PayloadAction<{ key: K; value: StateStore[K] }>
    ) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export const { registerInfo } = useStorage.actions;
export default useStorage.reducer;
