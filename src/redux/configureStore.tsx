import { createBrowserHistory } from "history";
import * as localforage from "localforage";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import createSagaMiddleware from 'redux-saga';
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
// config
import rootReducer from "./rootReducer";
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const persistConfig: PersistConfig = {
	key: "root",
	version: 1,
	storage: localforage,
	blacklist: ['loginForm', 'listing'],
};

const logger = (createLogger as any)();
const history = createBrowserHistory();

const dev = process.env.NODE_ENV === "development";

let middleware = dev ? applyMiddleware(logger, sagaMiddleware) : applyMiddleware(sagaMiddleware);

if (dev) {
	middleware = composeWithDevTools(middleware);
}

const persistedReducer = persistReducer(persistConfig, rootReducer(history));


export default () => {
	const store = createStore(persistedReducer, middleware);
	const persistor = persistStore(store);
	return {
		store, persistor, runSaga: sagaMiddleware.run(rootSaga)
	};
};

export { history };
