import React, {FC} from 'react';
import {Select} from "antd";
import {FilterItemStyled} from "./styled";
import {FilterDepartmentProps} from "../../core/types/props";

const FilterDepartment: FC<FilterDepartmentProps> = ({options, setFilterDepartmentValue}) => {

    return (
        <>
            {options.length > 0
                &&
                <FilterItemStyled wrap>
                    <span>Департамент:</span>
                    <Select
                        defaultValue={''}
                        style={{width: 200}}
                        allowClear
                        onChange={value => setFilterDepartmentValue(value)}
                        options={options.map(option => ({value: option.id.toString(), label: option.name}))}
                    />
                </FilterItemStyled>
            }
        </>
    );
};

export default FilterDepartment;