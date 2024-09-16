import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../feature/ApiSlice/apiSlice";

// import userReducer from '../State/userSlice'
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // devTools: import.meta.env.VITE_ENV !== "PRODUCTION",
  middleware: (gDM) => gDM().concat(apiSlice.middleware),
});
