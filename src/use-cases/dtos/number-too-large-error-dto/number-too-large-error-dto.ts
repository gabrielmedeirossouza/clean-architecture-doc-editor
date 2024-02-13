import { INumberTooLargeErrorDTO } from "@/use-cases/interfaces/dtos";

interface INumberTooLargeErrorDTOConstructorParameters<T> {
    code: T;
    fieldName: string;
    value: number;
    maxValue: number;
}

export class NumberTooLargeErrorDTO<T extends string> implements INumberTooLargeErrorDTO<T>
{
	public readonly code: T;

	public readonly fieldName: string;

	public readonly value: number;

	public readonly maxValue: number;

	public readonly message: string;

	constructor({ code, fieldName, value, maxValue }: INumberTooLargeErrorDTOConstructorParameters<T>)
	{
		this.code = code;
		this.fieldName = fieldName;
		this.value = value;
		this.maxValue = maxValue;
		this.message = `NumberTooLargeErrorDTO: Field "${fieldName}" with value "${value}" cannot be larger than "${maxValue}".`;
	}
}
