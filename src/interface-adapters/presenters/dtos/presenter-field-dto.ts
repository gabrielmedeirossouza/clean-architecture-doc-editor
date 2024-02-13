import { IPresenterFieldDTO } from "@/interface-adapters/interfaces/presenters/dtos";

interface IPresenterFieldDTOConstructorParameters<T> {
    code: T;
    fieldName: string;
}

export class PresenterFieldDTO<T extends string> implements IPresenterFieldDTO<T>
{
	public readonly code: T;

	public readonly fieldName: string;

	constructor({ code, fieldName }: IPresenterFieldDTOConstructorParameters<T>)
	{
		this.code = code;
		this.fieldName = fieldName;
	}
}
