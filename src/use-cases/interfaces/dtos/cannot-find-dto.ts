import { MessageDto } from ".";

export interface CannotFindDto<T> extends MessageDto<T> {
    readonly searchCriteria: string;
    readonly searchValue: string;
    readonly entityName: string;
}
