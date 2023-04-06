import React, {FC} from 'react';
import {Select} from "antd";
import {FilterItemStyled} from "./styled";
import {FilterConnectionProps} from "../../core/types/props";

const FilterConnection: FC<FilterConnectionProps> = ({options,setFilterConnectionValue}) => {

    return (
        <FilterItemStyled wrap>
            <span>Соединение:</span>
            <Select
                defaultValue={''}
                style={{width: 200}}
                onChange={value => setFilterConnectionValue(value)}
                options={options.map(option => ({value: option.connectionStateId.toString(), label: option.name}))}
            />
        </FilterItemStyled>
    );
};

export default FilterConnection;