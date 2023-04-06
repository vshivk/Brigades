import React, {FC, useEffect} from 'react';
import FilterConnection from "./filter-connection";
import {useAppDispatch} from "../../core/hooks/use-app-dispatch";
import {fetchDepartments} from "../../core/store/action-creators/departments";
import {useAppSelector} from "../../core/hooks/use-app-selector";
import {selectConnectionsReducers} from "../../core/store/reducers/connection-slice";
import {fetchConnections} from "../../core/store/action-creators/connections";
import FilterDepartment from "./filter-department";
import {selectDepartmentsReducers} from "../../core/store/reducers/departments-slice";
import {FilterListStyled} from "./styled";
import {FiltersListProps} from "../../core/types/props";

const FiltersList: FC<FiltersListProps> = ({setFilterConnectionValue,setFilterDepartmentValue}) => {
    const dispatch = useAppDispatch();
    const {connections} = useAppSelector(selectConnectionsReducers);
    const {departments} = useAppSelector(selectDepartmentsReducers);

    useEffect(() => {
        dispatch(fetchDepartments());
        dispatch(fetchConnections());
    }, []);

    return (
        <FilterListStyled>
            <FilterConnection
                options={connections}
                setFilterConnectionValue={setFilterConnectionValue}
            />
            <FilterDepartment
                options={departments}
                setFilterDepartmentValue={setFilterDepartmentValue}
            />
        </FilterListStyled>
    );
};

export default FiltersList;