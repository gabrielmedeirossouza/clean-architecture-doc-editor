import { IPresenterStringTooLongErrorDTO } from "@/interface-adapters/interfaces/presenters/dtos";

interface IPresenterStringTooLongErrorDTOConstructorParameters<T> {
    code: T;
    fieldName: string;
    message: string;
    value: string;
    maxLength: number;
}

export class PresenterStringTooLongErrorDTO<T extends string> implements IPresenterStringTooLongErrorDTO<T>
{
	public readonly code: T;

	public readonly fieldName: string;

	public readonly message: string;

	public readonly value: string;

	public readonly maxLength: number;

	constructor({ code, fieldName, message, value, maxLength }: IPresenterStringTooLongErrorDTOConstructorParameters<T>)
	{
		this.code = code;
		this.fieldName = fieldName;
		this.message = message;
		this.value = value;
		this.maxLength = maxLength;
	}
}
