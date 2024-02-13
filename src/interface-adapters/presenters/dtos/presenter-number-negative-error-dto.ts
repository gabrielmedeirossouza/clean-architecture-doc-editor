import { IPresenterNumberNegativeErrorDTO } from "@/interface-adapters/interfaces/presenters/dtos";

interface IPresenterNumberNegativeErrorDTOConstructorParameters<T> {
    code: T;
    fieldName: string;
    message: string;
    value: number;
}

export class PresenterNumberNegativeErrorDTO<T extends string> implements IPresenterNumberNegativeErrorDTO<T>
{
	public readonly code: T;

	public readonly fieldName: string;

	public readonly message: string;

	public readonly value: number;

	constructor({ code, fieldName, message, value }: IPresenterNumberNegativeErrorDTOConstructorParameters<T>)
	{
		this.code = code;
		this.fieldName = fieldName;
		this.message = message;
		this.value = value;
	}
}
