import {AppDispatch} from "../store";
import axios from "axios";
import {connectionState} from "../../consts/api";
import {connectionsSlice} from "../reducers/connection-slice";

export const fetchConnections = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(connectionsSlice.actions.connectionsFetching);
        const response = await axios.get(connectionState);
        dispatch(connectionsSlice.actions.connectionsFetchingSuccess(response.data));
    } catch (e: any) {
        dispatch(connectionsSlice.actions.connectionsFetchingError(e.message));
    }
}