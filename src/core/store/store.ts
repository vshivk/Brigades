import {combineReducers, configureStore} from "@reduxjs/toolkit";
import brigadesReducer from './reducers/brigades-slice'
import departmentsReducer from './reducers/departments-slice'
import connectionsReducer from './reducers/connection-slice'

const rootReducer = combineReducers({
    brigadesReducer,
    departmentsReducer,
    connectionsReducer
});
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
export const store = setupStore();
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];