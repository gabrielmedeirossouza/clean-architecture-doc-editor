import { IPersistedEntity } from "../interfaces";

export class PersistedEntity<T> implements IPersistedEntity<T>
{
	constructor(
        public readonly id: string,
        public readonly entity: T
	)
	{}
}
