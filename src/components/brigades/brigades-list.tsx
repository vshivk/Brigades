import React, {FC, useCallback, useEffect, useState} from 'react';
import {Card, Space} from "antd";
import {fetchBrigades} from "../../core/store/action-creators/brigades";
import {useAppSelector} from "../../core/hooks/use-app-selector";
import {brigadesSlice, selectBrigadesReducers} from "../../core/store/reducers/brigades-slice";
import {useAppDispatch} from "../../core/hooks/use-app-dispatch";
import BrigadesItem from "./brigades-item";

const BrigadesList: FC = () => {
    const dispatch = useAppDispatch();
    const {brigades, isLoading, error} = useAppSelector(selectBrigadesReducers);
    const [maxBrigadesLength, setMaxBrigadesLength] = useState(0);

    const scrollHandler = useCallback((e: any) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
            && maxBrigadesLength > brigades.length) {
            dispatch(brigadesSlice.actions.brigadesFetching());
        }
    }, [dispatch, brigades.length, maxBrigadesLength]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return () => {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, [scrollHandler]);

    useEffect(() => {
        if (isLoading) {
            dispatch(fetchBrigades(setMaxBrigadesLength));
        }
    }, [isLoading]);

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