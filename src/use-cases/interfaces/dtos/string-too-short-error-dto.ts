import { FieldDto, MessageDto } from ".";

export interface StringTooShortErrorDto<T> extends FieldDto<T>, MessageDto<T> {
	readonly minLength: number;
	readonly value: string;
}
