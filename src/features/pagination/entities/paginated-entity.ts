export class PaginatedEntity<T> {
    constructor(
        public currentPage: number,
        public totalPages: number,
        public limit: number,
        public totalItems: number,
        public items: T[]
    ) {}
}
