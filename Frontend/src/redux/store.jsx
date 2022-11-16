import {createStore, applyMiddleware } from "redux";

import rootReducer from "./reducer";

import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";

import {persistStore, persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = applyMiddleware(promiseMiddleware, logger);
const store = createStore(persistedReducer, middlewares);
const persistor = persistStore(store);

export {
    store,
    persistor
};