import {AppDispatch} from "../store";
import axios from "axios";
import {brigadesSlice} from "../reducers/brigades-slice";
import {brigadesData} from "../../consts/api";
import {maxElementsPerPage} from "../../consts/consts";
import React from "react";

let startIndex = 0;
let endIndex = maxElementsPerPage;

export const fetchBrigades = (setMaxBrigadesLength: React.Dispatch<React.SetStateAction<number>>) => async (dispatch: AppDispatch) => {
    try {
        dispatch(brigadesSlice.actions.brigadesFetching);
        const response = await axios.get(brigadesData);
        setMaxBrigadesLength(response.data.length);
        const slicedData = response.data.slice(startIndex, endIndex);
        dispatch(brigadesSlice.actions.brigadesFetchingSuccess(slicedData));
        startIndex += maxElementsPerPage;
        endIndex += maxElementsPerPage;
    } catch (e: any) {
        dispatch(brigadesSlice.actions.brigadesFetchingError(e.message));
    }
}