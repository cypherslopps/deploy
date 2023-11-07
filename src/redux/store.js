import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from "./root-reducer";

const middlewares = [logger, composeWithDevTools];

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middlewares)
});

export const useAppDispatch = () => store.dispatch;
export const useAppSelector = useSelector;

export default store;