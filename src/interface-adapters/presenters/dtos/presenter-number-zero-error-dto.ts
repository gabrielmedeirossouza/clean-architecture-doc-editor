import { IPresenterNumberZeroErrorDTO } from "@/interface-adapters/interfaces/presenters/dtos";

interface IPresenterNumberZeroErrorDTOConstructorParameters<T> {
    code: T;
    fieldName: string;
    message: string;
}

export class PresenterNumberZeroErrorDTO<T extends string> implements IPresenterNumberZeroErrorDTO<T>
{
	public readonly code: T;

	public readonly fieldName: string;

	public readonly message: string;

	constructor({ code, fieldName, message }: IPresenterNumberZeroErrorDTOConstructorParameters<T>)
	{
		this.code = code;
		this.fieldName = fieldName;
		this.message = message;
	}
}
