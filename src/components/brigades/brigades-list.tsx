import React, {FC, useCallback, useEffect, useState} from 'react';
import {Card, Space} from "antd";
import {fetchBrigades} from "../../core/store/action-creators/brigades";
import {useAppSelector} from "../../core/hooks/use-app-selector";
import {brigadesSlice, selectBrigadesReducers} from "../../core/store/reducers/brigades-slice";
import {useAppDispatch} from "../../core/hooks/use-app-dispatch";
import BrigadesItem from "./brigades-item";
import {maxElementsPerPage} from "../../core/consts/consts";
import {Brigade} from "../../core/types/brigades";

interface BrigadesListProps {
    filterValue: string,
    filterDepartmentValue: string
}

const BrigadesList: FC<BrigadesListProps> = ({filterValue, filterDepartmentValue}) => {
    const dispatch = useAppDispatch();
    const {brigades, isLoading, error} = useAppSelector(selectBrigadesReducers);
    const [filteredByValueBrigades, setFilteredByValueBrigades] = useState<Brigade[]>([]);
    const [filteredByDepartmentBrigades, setFilteredByDepartmentBrigades] = useState<Brigade[]>([]);
    const data = (
        filterValue === '' && filterDepartmentValue === ''
            ? brigades
            : (
                filteredByValueBrigades.length > 0 && filteredByDepartmentBrigades.length > 0
                    ? filteredByValueBrigades.filter(brigade1 =>
                        filteredByDepartmentBrigades.some(brigade2 => brigade1.id === brigade2.id))
                    : filteredByValueBrigades.length > 0
                        ? filteredByValueBrigades
                        : filteredByDepartmentBrigades
            )
    );

    useEffect(() => {
        dispatch(fetchBrigades());
    }, []);

    useEffect(() => {
        if (filterValue !== '') {
            setFilteredByValueBrigades(brigades.filter(brigade => String(brigade.connectionStateId) === filterValue));
        } else {
            setFilteredByValueBrigades([]);
        }
    }, [brigades, filterValue]);

    useEffect(() => {
        if(filterDepartmentValue !== ''){
            setFilteredByDepartmentBrigades(brigades.filter(brigade => {
                // @ts-ignore
                return String(brigade.department?.id) === filterDepartmentValue;
            }));
        } else {
            setFilteredByDepartmentBrigades([]);
        }
    }, [brigades, filterDepartmentValue]);

    const scrollHandler = useCallback((e:any)=>{
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100){
            console.log('scroll')
        }
    },[]);

    useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
        document.removeEventListener('scroll', scrollHandler);
    }
}, [scrollHandler]);

    return (
        <>
            {data.length > 0 &&
                <Space direction="vertical" size={14}
                       style={{marginTop: '20px', display: 'flex', flexWrap: 'wrap', flexDirection: 'unset'}}>
                    {data.map(brigade =>
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


// let [startIndex, setStartIndex] = useState(0);
// let [endIndex, setEndIndex] = useState(maxElementsPerPage);

// useEffect(() => {
//     if (filterValue === '') {
//         const slicedData = brigades.slice(startIndex, endIndex);
//         setBrigadesData([...brigadesData, ...slicedData]);
//     } else {
//         setFilteredBrigadesData(brigadesData.filter((brigade) => String(brigade.connectionStateId) === filterValue))
//     }
//     dispatch(brigadesSlice.actions.brigadesFetching(false));
// }, [brigades, startIndex, endIndex, filterValue]);

// const scrollHandler = useCallback((e: any) => {
//     if (filterValue !== '' && brigadesData !== filteredBrigadesData) {
//         setStartIndex(0);
//         setEndIndex(maxElementsPerPage);
//         setBrigadesData(brigades.slice(0, maxElementsPerPage));
//     }
//     if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
//         && brigades.length > brigadesData.length) {
//         dispatch(brigadesSlice.actions.brigadesFetching(true));
//         setStartIndex(startIndex += maxElementsPerPage);
//         setEndIndex(endIndex += maxElementsPerPage);
//     }
// }, [dispatch, brigades.length, brigadesData.length]);

// useEffect(() => {
//     document.addEventListener('scroll', scrollHandler);
//     return () => {
//         document.removeEventListener('scroll', scrollHandler);
//     }
// }, [scrollHandler]);