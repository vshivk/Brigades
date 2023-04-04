export interface DepartmentsState {
    departments: Department[],
    isLoading: boolean,
    error: string
}
export interface Department {
    connectionStateId: number,
    name: string
}