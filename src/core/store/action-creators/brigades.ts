import {AppDispatch} from "../store";
import axios from "axios";
import {brigadesSlice} from "../reducers/brigades-slice";
import {brigadesData} from "../../consts/api";

export const fetchBrigades = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(brigadesSlice.actions.brigadesFetching);
        const response = await axios.get(brigadesData);
        dispatch(brigadesSlice.actions.brigadesFetchingSuccess(response.data));
    } catch (e: any) {
        dispatch(brigadesSlice.actions.brigadesFetchingError(e.message));
    }
}