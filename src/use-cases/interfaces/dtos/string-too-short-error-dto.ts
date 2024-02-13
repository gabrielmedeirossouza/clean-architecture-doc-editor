import { IFieldDTO } from "./field-dto";
import { IMessageDTO } from "./message-dto";

export interface IStringTooShortErrorDTO<T extends string> extends IFieldDTO<T>, IMessageDTO<T> {
	readonly minLength: number;
	readonly value: string;
}
