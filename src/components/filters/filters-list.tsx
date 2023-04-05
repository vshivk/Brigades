import React, {FC, useEffect} from 'react';
import FilterItem from "./filter-item";
import {useAppDispatch} from "../../core/hooks/use-app-dispatch";
import {fetchDepartments} from "../../core/store/action-creators/departments";
import {useAppSelector} from "../../core/hooks/use-app-selector";
import {selectDepartmentsReducers} from "../../core/store/reducers/departments-slice";
import {selectConnectionsReducers} from "../../core/store/reducers/connection-slice";
import {fetchConnections} from "../../core/store/action-creators/connections";

const FiltersList: FC = () => {
    const dispatch = useAppDispatch();
    const {departments} = useAppSelector(selectDepartmentsReducers);
    const {connections} = useAppSelector(selectConnectionsReducers);

    useEffect(() => {
        dispatch(fetchDepartments());
        dispatch(fetchConnections());
    }, []);

    return (
        <div style={{display: 'flex', gap: '15px', marginTop: '20px'}}>
            <FilterItem
                options={connections}
            />
        </div>
    );
};

export default FiltersList;