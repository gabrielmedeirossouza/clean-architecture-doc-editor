export interface IPaginatedEntity<T> {
    currentPage: number;
    totalPages: number;
    limit: number;
    totalItems: number;
    items: T[];
}
