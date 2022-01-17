import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../types/users';

interface UserState {
    users    : IUser[],
    isLoading: boolean,
    error    : string,
    counter  : number,
}

const initialState: UserState = {
    users    : [],
    isLoading: false,
    error    : '',
    counter  : 0,
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.counter += action.payload;
        }
    }
});

export const { reducer: usersReducer } = usersSlice;