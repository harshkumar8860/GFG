import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "../feature/weather/weatherSlice";
export const store = configureStore({
  reducer: {
    weather: weatherSlice,
  },
});




