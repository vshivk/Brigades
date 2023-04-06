import {Brigade, BrigadesState} from "../../types/brigades";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

export const initialState: BrigadesState = {
    brigades: [],
    isLoading: true,
    currentPage: 1,
    error: '',
}
export const brigadesSlice = createSlice({
    name: 'brigades',
    initialState,
    reducers: {
        brigadesFetching(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        brigadesFetchingSuccess(state, action: PayloadAction<Brigade[]>) {
            state.error = '';
            state.brigades = [...state.brigades, ...action.payload];
            state.isLoading = false;
        },
        brigadesFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const selectBrigadesReducers = (state: RootState) => state.brigadesReducer;
export default brigadesSlice.reducer;