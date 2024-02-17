import { PersistedEntity } from "@/entities/interfaces";

export namespace ConcretePersistedEntity {
    export interface ConstructorParameters<T> {
        id: string;
        entity: T;
    }

    export class Entity<T> implements PersistedEntity<T>
    {
    	public readonly id: string;

    	public readonly entity: T;

    	constructor({ id, entity }: ConstructorParameters<T>)
    	{
    		this.id = id;
    		this.entity = entity;
    	}
    }
}
