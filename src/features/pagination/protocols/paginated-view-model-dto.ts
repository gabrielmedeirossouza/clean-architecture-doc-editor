export interface IPaginatedViewModel<T> {
    readonly currentPage: number;
    readonly totalPages: number;
    readonly limit: number;
    readonly totalItems: number;
    readonly items: T[];
}
