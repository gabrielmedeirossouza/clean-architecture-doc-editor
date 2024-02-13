import { IPresenterNumberTooSmallErrorDTO } from "@/interface-adapters/interfaces/presenters/dtos";

interface IPresenterNumberTooSmallErrorDTOConstructorParameters<T> {
    code: T;
    fieldName: string;
    message: string;
    value: number;
    minValue: number;
}

export class PresenterNumberTooSmallErrorDTO<T extends string> implements IPresenterNumberTooSmallErrorDTO<T>
{
	public readonly code: T;

	public readonly fieldName: string;

	public readonly message: string;

	public readonly value: number;

	public readonly minValue: number;

	constructor({ code, fieldName, message, value, minValue }: IPresenterNumberTooSmallErrorDTOConstructorParameters<T>)
	{
		this.code = code;
		this.fieldName = fieldName;
		this.message = message;
		this.value = value;
		this.minValue = minValue;
	}
}
