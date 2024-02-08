import { IBaseDTO } from "./base-dto";

export interface IRepositoryEntityNotFoundErrorDTO extends IBaseDTO {
    readonly id: string;
    readonly entityName: string;
}
