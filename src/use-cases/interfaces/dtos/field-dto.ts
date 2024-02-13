import { IBaseDTO } from "./base-dto";

export interface IFieldDTO<T extends string> extends IBaseDTO<T> {
	readonly fieldName: string;
}
