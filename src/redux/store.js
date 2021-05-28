import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import employeesReducer from "./employees-reducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const employeesPersistConfig = {
  key: "root",
  storage,
};

let reducers = combineReducers({
  employeesPage: persistReducer(employeesPersistConfig, employeesReducer),
});

export const store = createStore(reducers, compose(applyMiddleware(thunk)));
export const persistor = persistStore(store);
window.store = store;
