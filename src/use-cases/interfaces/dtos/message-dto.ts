import { BaseDto } from "./base-dto";

export interface MessageDto<T> extends BaseDto<T> {
	readonly message: string;
}
