export class PersistedDto<T> {
    constructor(
        public readonly id: string,
        public readonly entity: T
    ) { }
}
