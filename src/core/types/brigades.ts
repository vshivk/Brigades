export interface BrigadesState {
    brigades: Brigade[],
    isLoading: boolean,
    error: string
}

export interface Brigade {
    id: number,
    brigade_name: string,
    connectionStateId: number,
    department: departmentId,
    position: PositionState
}

export interface departmentId {
    id: number
}

export interface PositionState {
    field: string,
    cluster: number,
    well: number
}