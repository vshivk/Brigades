import React, {FC, useEffect} from 'react';
import {Card, Space} from "antd";
import {fetchBrigades} from "../../core/store/action-creators/brigades";
import {useAppSelector} from "../../core/hooks/use-app-selector";
import {selectBrigadesReducers} from "../../core/store/reducers/brigades-slice";
import {useAppDispatch} from "../../core/hooks/use-app-dispatch";
import BrigadesItem from "./brigades-item";

const BrigadesList: FC = () => {
    const dispatch = useAppDispatch();
    const {brigades, isLoading, error} = useAppSelector(selectBrigadesReducers);

    useEffect(() => {
        dispatch(fetchBrigades());
    }, []);

    return (
        <>
            {brigades.length > 0
                &&
                <Space direction="vertical" size={14}
                       style={{marginTop: '20px', display: 'flex', flexWrap: 'wrap', flexDirection: 'unset'}}>
                    {brigades.map(brigade =>
                        <BrigadesItem
                            key={brigade.id}
                            brigade={brigade}
                        />
                    )}
                </Space>
            }
            {error && <p>{error}</p>}
            {isLoading && <p>Идет загрузка...</p>}
        </>

    );
};

export default BrigadesList;