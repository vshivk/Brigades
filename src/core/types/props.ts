import React from "react";
import {Brigade} from "./brigades";

export interface FiltersListProps {
    setFilterConnectionValue:  React.Dispatch<React.SetStateAction<string>>,
    setFilterDepartmentValue: React.Dispatch<React.SetStateAction<string>>
}
interface OptionsConnectionProps {
    connectionStateId: number,
    name: string
}

export interface FilterConnectionProps {
    options: OptionsConnectionProps[],
    setFilterConnectionValue:  React.Dispatch<React.SetStateAction<string>>
}
interface OptionsDepartmentProps {
    id: number,
    name: string
}

export interface FilterDepartmentProps {
    options: OptionsDepartmentProps[],
    setFilterDepartmentValue:  React.Dispatch<React.SetStateAction<string>>
}
export interface BrigadesListProps {
    filterConnectionValue: string,
    filterDepartmentValue: string
}
export interface BrigadesItemProps {
    brigade: Brigade
}