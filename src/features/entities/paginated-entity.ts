import { IPaginatedEntity } from "./protocols";

export class PaginatedEntity<T> implements IPaginatedEntity<T> {
    constructor(
        public currentPage: number,
        public totalPages: number,
        public limit: number,
        public totalItems: number,
        public items: T[]
    ) { }
}
