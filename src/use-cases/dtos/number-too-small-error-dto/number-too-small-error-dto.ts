import { INumberTooSmallErrorDTO } from "@/use-cases/interfaces/dtos";

interface INumberTooSmallErrorDTOConstructorParameters<T> {
    code: T;
    fieldName: string;
    value: number;
    minValue: number;
}

export class NumberTooSmallErrorDTO<T extends string> implements INumberTooSmallErrorDTO<T>
{
	public readonly code: T;

	public readonly fieldName: string;

	public readonly value: number;

	public readonly minValue: number;

	public readonly message: string;

	constructor({ code, fieldName, value, minValue }: INumberTooSmallErrorDTOConstructorParameters<T>)
	{
		this.code = code;
		this.fieldName = fieldName;
		this.value = value;
		this.minValue = minValue;
		this.message = `NumberTooSmallErrorDTO: Field "${fieldName}" with value "${value}" cannot be smaller than "${minValue}".`;
	}
}
