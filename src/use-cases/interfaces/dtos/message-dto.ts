import { IBaseDTO } from "./base-dto";

export interface IMessageDTO extends IBaseDTO {
	readonly message: string;
}
