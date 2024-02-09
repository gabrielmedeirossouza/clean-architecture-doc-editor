import { IMessageDTO } from "./message-dto";

export interface ICannotFindDTO extends IMessageDTO {
    readonly searchCriteria: string;
    readonly searchValue: string;
    readonly entityName: string;
}
