export interface DepartmentsState {
    departments: Department[],
    isLoading: boolean,
    error: string
}

export interface Department {
    id: number,
    name: string
}