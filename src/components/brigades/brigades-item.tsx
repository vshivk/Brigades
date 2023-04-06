import React, {FC} from 'react';
import {Brigade} from "../../core/types/brigades";
import {useAppSelector} from "../../core/hooks/use-app-selector";
import {selectConnectionsReducers} from "../../core/store/reducers/connection-slice";
import {Connection} from "../../core/types/connection";
import {selectDepartmentsReducers} from "../../core/store/reducers/departments-slice";
import {BrigadesCardInnerStyled, BrigadesCardStyled} from "./styled";
import {BrigadesItemProps} from "../../core/types/props";

const BrigadesItem: FC<BrigadesItemProps> = ({brigade}) => {
    const {brigade_name, position, connectionStateId, department} = brigade;
    const {connections} = useAppSelector(selectConnectionsReducers);
    const {departments} = useAppSelector(selectDepartmentsReducers);
    const currentStatus: Connection[] = connections.filter(connection => connection.connectionStateId === connectionStateId);
    const currentDepartments = departments.filter(currentDepartment => {
        if (currentDepartment.id === department["id"]) return currentDepartment;
    });
    const isAvailable = currentStatus.length > 0 && currentStatus[0].name === "Доступен" ? {color: 'green'} : {color: 'red'};

    return (
        <BrigadesCardStyled title={brigade_name}>
            <BrigadesCardInnerStyled>
                <h3>{currentDepartments.length > 0 && currentDepartments[0].name}</h3>
                <span style={isAvailable}><b>Соединение</b>: {currentStatus.length > 0 ? currentStatus[0].name : "Не найдено"}</span>
                <span><b>Кластер</b>: {position.cluster}</span>
                <span><b>Поле</b>: {position.field}</span>
                <span><b>Скважина</b>: {position.well}</span>
            </BrigadesCardInnerStyled>
        </BrigadesCardStyled>
    );
};

export default BrigadesItem;