import { IPresenterStringTooShortErrorDTO } from "@/interface-adapters/interfaces/presenters/dtos";

interface IPresenterStringTooShortErrorDTOConstructorParameters<T> {
    code: T;
    fieldName: string;
    message: string;
    value: string;
    minLength: number;
}

export class PresenterStringTooShortErrorDTO<T extends string> implements IPresenterStringTooShortErrorDTO<T>
{
	public readonly code: T;

	public readonly fieldName: string;

	public readonly message: string;

	public readonly value: string;

	public readonly minLength: number;

	constructor({ code, fieldName, message, value, minLength }: IPresenterStringTooShortErrorDTOConstructorParameters<T>)
	{
		this.code = code;
		this.fieldName = fieldName;
		this.message = message;
		this.value = value;
		this.minLength = minLength;
	}
}
