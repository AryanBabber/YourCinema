import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";


const persistConfig = {

}

const middlewares = [
    
]