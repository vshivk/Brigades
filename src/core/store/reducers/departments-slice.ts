import {Department, DepartmentsState} from "../../types/departaments";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

export const initialState: DepartmentsState = {
    departments: [],
    isLoading: true,
    error: '',
}

export const departmentsSlice = createSlice({
    name: 'departments',
    initialState,
    reducers: {
        departmentsFetching(state) {
            state.isLoading = true;
        },
        departmentsFetchingSuccess(state, action: PayloadAction<Department[]>) {
            state.error = '';
            state.departments = [...state.departments, ...action.payload];
            state.isLoading = false;
        },
        departmentsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})
export const selectDepartmentsReducers = (state: RootState) => state.departmentsReducer;
export default departmentsSlice.reducer;