import { configureStore } from "@reduxjs/toolkit";
import changeUnitsReducer from "./reducers";

const store = configureStore({ reducer: changeUnitsReducer });

export default store;
