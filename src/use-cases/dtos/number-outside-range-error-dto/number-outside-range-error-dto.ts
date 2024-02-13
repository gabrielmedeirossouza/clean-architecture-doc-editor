import { INumberOutsideRangeErrorDTO } from "@/use-cases/interfaces/dtos";

interface INumberOutsideRangeErrorDTOConstructorParameters<T> {
    code: T;
    fieldName: string;
    value: number;
    minValue: number;
    maxValue: number;
}

export class NumberOutsideRangeErrorDTO<T extends string> implements INumberOutsideRangeErrorDTO<T>
{
	public readonly code: T;

	public readonly fieldName: string;

	public readonly value: number;

	public readonly minValue: number;

	public readonly maxValue: number;

	public readonly message: string;

	constructor({ code, fieldName, value, minValue, maxValue }: INumberOutsideRangeErrorDTOConstructorParameters<T>)
	{
		this.code = code;
		this.fieldName = fieldName;
		this.value = value;
		this.minValue = minValue;
		this.maxValue = maxValue;
		this.message = `NumberOutsideRangeErrorDTO: Field "${fieldName}" with value "${value}" is outside the range of "${minValue}" and "${maxValue}".`;
	}
}
