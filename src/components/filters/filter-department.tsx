import React, {FC} from 'react';
import {Select, Space} from "antd";

interface Options {
    id: number,
    name: string
}

interface FilterDepartmentProps {
    options: Options[],
    setFilterDepartmentValue:  React.Dispatch<React.SetStateAction<string>>
}

const FilterDepartment:FC<FilterDepartmentProps> = ({options,setFilterDepartmentValue}) => {

    const handleFilterChange = (value:string) => {
        setFilterDepartmentValue(value);
    };

    return (
        <Space wrap style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
            <span>Департамент:</span>
            <Select
                defaultValue={''}
                style={{width: 200}}
                onChange={handleFilterChange}
                options={options.map(option => ({value: option.id.toString(), label: option.name}))}
            />
        </Space>
    );
};

export default FilterDepartment;