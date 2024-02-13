import { INumberNegativeErrorDTO } from "@/use-cases/interfaces/dtos";

interface INumberNegativeErrorDTOConstructorParameters<T> {
    code: T;
    fieldName: string;
    value: number;
}

export class NumberNegativeErrorDTO<T extends string> implements INumberNegativeErrorDTO<T>
{
	public readonly code: T;

	public readonly fieldName: string;

	public readonly value: number;

	public readonly message: string;

	constructor({ code, fieldName, value }: INumberNegativeErrorDTOConstructorParameters<T>)
	{
		this.code = code;
		this.fieldName = fieldName;
		this.value = value;
		this.message = `NumberNegativeErrorDTO: Field "${fieldName}" with value "${value}" is negative.`;
	}
}
