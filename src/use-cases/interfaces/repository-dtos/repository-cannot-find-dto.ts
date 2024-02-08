import { IBaseDTO } from "./base-dto";

export interface IRepositoryCannotFindDTO extends IBaseDTO {
    readonly searchCriteria: string;
    readonly searchValue: string;
    readonly entityName: string;
}
