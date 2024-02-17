import { BaseDto } from "./base-dto";

export interface FieldDto<T> extends BaseDto<T> {
	readonly fieldName: string;
}
