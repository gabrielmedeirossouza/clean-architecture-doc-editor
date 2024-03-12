export class PersistedDto<T> {
    constructor(
        public readonly id: string,
        public readonly data: T
    ) { }
}
