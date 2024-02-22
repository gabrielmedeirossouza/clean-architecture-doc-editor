import { IPaginatedEntities } from "@/entities/protocols/paginated-entities";

export class PaginatedEntities<T> implements IPaginatedEntities<T> {
	constructor(
        public currentPage: number,
        public totalPages: number,
        public limit: number,
        public totalItems: number,
        public items: T[]
	) { }
}
