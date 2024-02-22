import { IPersistedEntity } from "@/entities/protocols/persisted-entity";

export class PersistedEntity<T> implements IPersistedEntity<T> {
	constructor(public readonly id: string, public readonly entity: T) {}
}
