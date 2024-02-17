export interface BaseDto<T> {
    readonly code: T;
    readonly message: string;
}
