import { legacy_createStore as createStore, combineReducers, Store, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
import configStore from "./modules/config/reducer";
import userStore from "./modules/user/reducer";
import { StoreType } from '@/redux/interface/index'
import * as types from './actionTypes'

// 创建reducer(拆分reducer)
const reducer = combineReducers({
    configStore,
    userStore,
});

// redux 持久化配置
const persistConfig = {
    key: "redux-state",
    storage: storage,
};
const persistReducerConfig = persistReducer(persistConfig, reducer);

// 开启 redux-devtools  compose-redux浏览器调试工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 使用 redux 中间件
const middleWares = applyMiddleware(reduxThunk, reduxPromise);

// 创建 store 持久存储
const store: Store<StoreType, {
    type: keyof typeof types
    [data: string]: any
}> = createStore(persistReducerConfig, composeEnhancers(middleWares));

// 创建持久化 store
const persistor = persistStore(store);
export { store, persistor };