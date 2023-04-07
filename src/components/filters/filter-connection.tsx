import React, {FC} from 'react';
import {Select} from "antd";
import {FilterItemStyled} from "./styled";
import {FilterConnectionProps} from "../../core/types/props";

const FilterConnection: FC<FilterConnectionProps> = ({options, setFilterConnectionValue}) => {
    return (
        <>
            {options.length > 0 && (
                <FilterItemStyled wrap>
                    <span>Соединение:</span>
                    <Select
                        defaultValue={''}
                        style={{width: 200}}
                        allowClear
                        onChange={value => setFilterConnectionValue(value)}
                        options={options.map(option => ({
                            value: option.connectionStateId.toString(),
                            label: option.name
                        }))}
                    />
                </FilterItemStyled>
            )}
        </>
    );
};

export default FilterConnection;