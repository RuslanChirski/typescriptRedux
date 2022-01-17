import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './slices/userSlice';

const rootReducer = combineReducers({
    usersReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']