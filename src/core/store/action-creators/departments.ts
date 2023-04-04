import {AppDispatch} from "../store";
import axios from "axios";
import {departmentsSlice} from "../reducers/departments-slice";
import {departments} from "../../consts/api";

export const fetchDepartments = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(departmentsSlice.actions.departmentsFetching);
        const response = await axios.get(departments);
        dispatch(departmentsSlice.actions.departmentsFetchingSuccess(response.data));
    } catch (e: any) {
        dispatch(departmentsSlice.actions.departmentsFetchingError(e.message));
    }
}