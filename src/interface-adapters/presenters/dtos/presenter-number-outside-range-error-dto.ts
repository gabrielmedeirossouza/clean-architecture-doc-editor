import { IPresenterNumberOutsideRangeErrorDTO } from "@/interface-adapters/interfaces/presenters/dtos";

interface IPresenterNumberOutsideRangeErrorDTOConstructorParameters<T> {
    code: T;
    fieldName: string;
    message: string;
    value: number;
    minValue: number;
    maxValue: number;
}

export class PresenterNumberOutsideRangeErrorDTO<T extends string> implements IPresenterNumberOutsideRangeErrorDTO<T>
{
	public readonly code: T;

	public readonly fieldName: string;

	public readonly message: string;

	public readonly value: number;

	public readonly minValue: number;

	public readonly maxValue: number;

	constructor({ code, fieldName, message, value, minValue, maxValue }: IPresenterNumberOutsideRangeErrorDTOConstructorParameters<T>)
	{
		this.code = code;
		this.fieldName = fieldName;
		this.message = message;
		this.value = value;
		this.minValue = minValue;
		this.maxValue = maxValue;
	}
}
