import React, {FC} from 'react';
import {Button, Menu, Dropdown, MenuProps, Space, Select} from "antd";
import {DownOutlined} from '@ant-design/icons';
import {useAppDispatch} from "../../core/hooks/use-app-dispatch";
import {brigadesSlice, selectBrigadesReducers} from "../../core/store/reducers/brigades-slice";
import {useAppSelector} from "../../core/hooks/use-app-selector";

interface Options {
    connectionStateId: number,
    name: string
}

interface FilterItemProps {
    options: Options[]
}

const FilterItem: FC<FilterItemProps> = ({options}) => {
    const dispatch = useAppDispatch();
    const {brigades} = useAppSelector(selectBrigadesReducers);
    console.log(options)

    const handleChange = (value: string) => {
        dispatch(brigadesSlice.actions.brigadesFiltrationConnection(Number(value)));
        console.log(`selected ${value}`);
    };

    return (
        <Space wrap style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
            <span>Соединение:</span>
            <Select
                style={{width: 200}}
                onChange={handleChange}
                options={options.map(option => ({value: option.connectionStateId.toString(), label: option.name}))}
            />
        </Space>
    );
};

export default FilterItem;