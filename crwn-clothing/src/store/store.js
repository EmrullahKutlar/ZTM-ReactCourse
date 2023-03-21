import { compose, applyMiddleware, createStore } from "redux";
// import logger from 'redux-logger';
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import {loggerMiddleware} from "./middleware/logger";
import {logger} from "redux-logger";
// import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './root-saga';

const persistConfig = {
  key: "root",
  storage,
//   blacklist: ["user"],
  whitelist: ['cart']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware= createSagaMiddleware()
const middlewares = [process.env.NODE_ENV !== 'production' && logger, 
// thunk
sagaMiddleware
].filter(Boolean);

const composeEnhancer= (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);
sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store);
