import { IPresenterNumberTooLargeErrorDTO } from "@/interface-adapters/interfaces/presenters/dtos";

interface IPresenterNumberTooLargeErrorDTOConstructorParameters<T> {
    code: T;
    fieldName: string;
    message: string;
    value: number;
    maxValue: number;
}

export class PresenterNumberTooLargeErrorDTO<T extends string> implements IPresenterNumberTooLargeErrorDTO<T>
{
	public readonly code: T;

	public readonly fieldName: string;

	public readonly message: string;

	public readonly value: number;

	public readonly maxValue: number;

	constructor({ code, fieldName, message, value, maxValue }: IPresenterNumberTooLargeErrorDTOConstructorParameters<T>)
	{
		this.code = code;
		this.fieldName = fieldName;
		this.message = message;
		this.value = value;
		this.maxValue = maxValue;
	}
}
