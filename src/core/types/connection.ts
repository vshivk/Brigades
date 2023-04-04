export interface ConnectionState {
    connections: Connection[],
    isLoading: boolean,
    error: string,
}
export interface Connection {
    connectionStateId: number,
    name: 'string'
}