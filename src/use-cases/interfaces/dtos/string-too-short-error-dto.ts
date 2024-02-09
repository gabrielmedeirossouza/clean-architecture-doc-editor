import { IFieldDTO } from "./field-dto";
import { IMessageDTO } from "./message-dto";

export interface IStringTooShortErrorDTO extends IFieldDTO, IMessageDTO {
	readonly minLength: number;
	readonly value: string;
}
