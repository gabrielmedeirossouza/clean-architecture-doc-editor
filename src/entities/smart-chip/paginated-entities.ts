import { PaginatedEntities } from "@/entities/interfaces";

export namespace ConcretePaginatedEntities {
    export interface ConstructorParameters<T> {
        currentPage: number;
        totalPages: number;
        limit: number;
        totalItems: number;
        items: T[];
    }

    export class Entity<T> implements PaginatedEntities<T>
    {
    	constructor(
            public currentPage: number,
            public totalPages: number,
            public limit: number,
            public totalItems: number,
            public items: T[]
    	)
    	{ }
    }
}
