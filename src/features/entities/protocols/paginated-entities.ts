export interface IPaginatedEntities<T> {
    currentPage: number;
    totalPages: number;
    limit: number;
    totalItems: number;
    items: T[];
}
