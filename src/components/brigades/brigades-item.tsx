import React, {FC} from 'react';
import {Card} from "antd";
import {Brigade} from "../../core/types/brigades";

interface BrigadesItemProps {
    brigade: Brigade
}

const BrigadesItem: FC<BrigadesItemProps> = ({brigade}) => {
    const {brigade_name, position} = brigade;

    return (
        <Card title={brigade_name} style={{width: 300}}>
            <h3>Газпром нефть</h3>
            <p><b>Соединение</b>: В норме</p>
            <p><b>Кластер</b>: {position.cluster}</p>
            <p><b>Поле</b>: {position.field}</p>
            <p><b>Скважина</b>: {position.well}</p>
        </Card>
    );
};

export default BrigadesItem;