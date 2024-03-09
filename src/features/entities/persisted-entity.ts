export class PersistedEntity<T> {
    constructor(public readonly id: string, public readonly entity: T) { }
}
