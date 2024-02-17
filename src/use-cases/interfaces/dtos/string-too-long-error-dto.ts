import { FieldDto, MessageDto } from ".";

export interface StringTooLongErrorDto<T> extends FieldDto<T>, MessageDto<T> {
	readonly maxLength: number;
	readonly value: string;
}
