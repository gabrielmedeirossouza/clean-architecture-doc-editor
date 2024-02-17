import { BaseDto } from "./base-dto";

export interface RepositoryCannotFindDto<T> extends BaseDto<T> {
    readonly searchCriteria: string;
    readonly searchValue: string;
    readonly entityName: string;
}
