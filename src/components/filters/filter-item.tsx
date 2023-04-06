import React, {FC} from 'react';
import {Button, Menu, Dropdown, MenuProps, Space, Select} from "antd";

interface Options {
    connectionStateId: number,
    name: string
}

interface FilterItemProps {
    options: Options[],
    setFilterValue:  React.Dispatch<React.SetStateAction<string>>
}

const FilterItem: FC<FilterItemProps> = ({options,setFilterValue}) => {

    const handleFilterChange = (value:string) => {
        setFilterValue(value);
    };

    return (
        <Space wrap style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
            <span>Соединение:</span>
            <Select
                defaultValue={''}
                style={{width: 200}}
                onChange={handleFilterChange}
                options={options.map(option => ({value: option.connectionStateId.toString(), label: option.name}))}
            />
        </Space>
    );
};

export default FilterItem;