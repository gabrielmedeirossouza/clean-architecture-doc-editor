import { IFieldDTO } from "./field-dto";
import { IMessageDTO } from "./message-dto";

export interface IStringTooLongErrorDTO<T extends string> extends IFieldDTO<T>, IMessageDTO<T> {
	readonly maxLength: number;
	readonly value: string;
}
