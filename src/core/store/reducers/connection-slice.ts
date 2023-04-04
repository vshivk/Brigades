import {Connection, ConnectionState} from "../../types/connection";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

export const initialState: ConnectionState = {
    connections: [],
    isLoading: true,
    error: '',
}
export const connectionsSlice = createSlice({
    name: 'connections',
    initialState,
    reducers: {
        connectionsFetching(state) {
            state.isLoading = true;
        },
        connectionsFetchingSuccess(state, action: PayloadAction<Connection[]>) {
            state.error = '';
            state.connections = [...state.connections, ...action.payload];
            state.isLoading = false;
        },
        connectionsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})
export const {} = connectionsSlice.actions;
export const selectConnectionsReducers = (state: RootState) => state.connectionsReducer;
export default connectionsSlice.reducer;