export interface IPersistedEntity<T> {
    readonly id: string;
    readonly entity: T;
}
