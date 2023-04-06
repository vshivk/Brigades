import React, {FC, useEffect} from 'react';
import FilterItem from "./filter-item";
import {useAppDispatch} from "../../core/hooks/use-app-dispatch";
import {fetchDepartments} from "../../core/store/action-creators/departments";
import {useAppSelector} from "../../core/hooks/use-app-selector";
import {selectConnectionsReducers} from "../../core/store/reducers/connection-slice";
import {fetchConnections} from "../../core/store/action-creators/connections";
import FilterDepartment from "./filter-department";
import {selectDepartmentsReducers} from "../../core/store/reducers/departments-slice";

interface FiltersListProps {
    setFilterValue:  React.Dispatch<React.SetStateAction<string>>,
    setFilterDepartmentValue: React.Dispatch<React.SetStateAction<string>>
}

const FiltersList: FC<FiltersListProps> = ({setFilterValue,setFilterDepartmentValue}) => {
    const dispatch = useAppDispatch();
    const {connections} = useAppSelector(selectConnectionsReducers);
    const {departments} = useAppSelector(selectDepartmentsReducers);

    useEffect(() => {
        dispatch(fetchDepartments());
        dispatch(fetchConnections());
    }, []);

    return (
        <div style={{display: 'flex', gap: '15px', marginTop: '20px'}}>
            <FilterItem
                options={connections}
                setFilterValue={setFilterValue}
            />
            <FilterDepartment
                options={departments}
                setFilterDepartmentValue={setFilterDepartmentValue}
            />
        </div>
    );
};

export default FiltersList;