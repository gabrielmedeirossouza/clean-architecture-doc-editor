import { IMessageDTO } from "./message-dto";

export interface ICannotFindDTO<T extends string> extends IMessageDTO<T> {
    readonly searchCriteria: string;
    readonly searchValue: string;
    readonly entityName: string;
}
