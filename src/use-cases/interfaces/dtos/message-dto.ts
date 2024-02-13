import { IBaseDTO } from "./base-dto";

export interface IMessageDTO<T extends string> extends IBaseDTO<T> {
	readonly message: string;
}
