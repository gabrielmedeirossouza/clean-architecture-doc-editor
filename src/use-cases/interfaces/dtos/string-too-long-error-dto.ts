import { IFieldDTO } from "./field-dto";
import { IMessageDTO } from "./message-dto";

export interface IStringTooLongErrorDTO extends IFieldDTO, IMessageDTO {
	readonly maxLength: number;
	readonly value: string;
}
