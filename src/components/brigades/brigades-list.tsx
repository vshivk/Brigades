import React, {FC, useCallback, useEffect, useState} from 'react';
import {fetchBrigades} from "../../core/store/action-creators/brigades";
import {useAppSelector} from "../../core/hooks/use-app-selector";
import {selectBrigadesReducers} from "../../core/store/reducers/brigades-slice";
import {useAppDispatch} from "../../core/hooks/use-app-dispatch";
import BrigadesItem from "./brigades-item";
import {maxElementsPerPage} from "../../core/consts/consts";
import {Brigade} from "../../core/types/brigades";
import {BrigadesListStyled} from "./styled";
import {BrigadesListProps} from "../../core/types/props";

const BrigadesList: FC<BrigadesListProps> = ({filterConnectionValue, filterDepartmentValue}) => {
    const dispatch = useAppDispatch();
    const { brigades, isLoading, error } = useAppSelector(selectBrigadesReducers);
    const [filteredByValueBrigades, setFilteredByValueBrigades] = useState<Brigade[]>([]);
    const [filteredByDepartmentBrigades, setFilteredByDepartmentBrigades] = useState<Brigade[]>([]);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(maxElementsPerPage);

    const filterBrigades = () => {
        if (!filterConnectionValue && !filterDepartmentValue) {
            return brigades.slice(0, endIndex);
        } else if (filteredByValueBrigades.length > 0 && filteredByDepartmentBrigades.length > 0) {
            return filteredByValueBrigades.filter(brigadeOne =>
                filteredByDepartmentBrigades.some(brigadeTwo => brigadeOne.id === brigadeTwo.id));
        } else {
            return filteredByValueBrigades.length > 0
                ? filteredByValueBrigades
                : filteredByDepartmentBrigades;
        }
    };
    const data = filterBrigades();

    const resetIndex = () => {
        setStartIndex(0);
        setEndIndex(maxElementsPerPage);
    };

    const loadOnScroll = useCallback((e: Event) => {
        const target = e.target as Document;
        const isNearBottom = target.documentElement.scrollHeight - (target.documentElement.scrollTop + window.innerHeight) < 100;
        if (isNearBottom) {
            setStartIndex(endIndex);
            setEndIndex(endIndex + maxElementsPerPage);
        }
    }, [endIndex]);

    useEffect(() => {
        dispatch(fetchBrigades());
    }, []);

    useEffect(() => {
        const filterByConnection = (brigade: Brigade) => String(brigade.connectionStateId) === filterConnectionValue;
        if (filterConnectionValue) {
            setFilteredByValueBrigades(brigades.filter(filterByConnection));
        } else {
            setFilteredByValueBrigades([]);
        }
        resetIndex();
    }, [brigades, filterConnectionValue]);

    useEffect(() => {
        const filterByDepartment = (brigade: Brigade) => String(brigade.department.id) === filterDepartmentValue;
        if (filterDepartmentValue) {
            setFilteredByDepartmentBrigades(brigades.filter(filterByDepartment));
        } else {
            setFilteredByDepartmentBrigades([]);
        }
        resetIndex();
    }, [brigades, filterDepartmentValue]);

    useEffect(() => {
        document.addEventListener('scroll', loadOnScroll);
        return () => {
            document.removeEventListener('scroll', loadOnScroll);
        };
    }, [loadOnScroll]);

    return (
        <>
            {data.length > 0 && (
                <BrigadesListStyled direction="vertical" size={14}>
                    {data.map(brigade => (
                        <BrigadesItem key={brigade.id} brigade={brigade} />
                    ))}
                </BrigadesListStyled>
            )}
            {error && <p>{error}</p>}
            {isLoading && <p>Идет загрузка...</p>}
        </>
    );
};

export default BrigadesList;