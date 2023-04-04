import React, {FC} from 'react';
import {Button, Menu, Dropdown, MenuProps} from "antd";
import {DownOutlined} from '@ant-design/icons';

interface Options {
    connectionStateId: number,
    name: string
}

interface FilterItemProps {
    options: Options[]
}

const FilterItem: FC<FilterItemProps> = ({options}) => {
    console.log(options)
    const menu = (
        <Menu>
            {options.map(option =>
                <Menu.Item key={option.connectionStateId}>
                    {option.name}
                </Menu.Item>
            )}
        </Menu>
    );

    return (
        <Dropdown overlay={menu}>
            <Button>
                Dropdown <DownOutlined/>
            </Button>
        </Dropdown>
    );
};

export default FilterItem;