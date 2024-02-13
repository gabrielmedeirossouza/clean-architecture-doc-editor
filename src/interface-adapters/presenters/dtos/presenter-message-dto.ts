import { IPresenterMessageDTO } from "@/interface-adapters/interfaces/presenters/dtos";

interface IPresenterMessageDTOConstructorParameters<T> {
    code: T;
    message: string;
}

export class PresenterMessageDTO<T extends string> implements IPresenterMessageDTO<T>
{
	public readonly code: T;

	public readonly message: string;

	constructor({ code, message }: IPresenterMessageDTOConstructorParameters<T>)
	{
		this.code = code;
		this.message = message;
	}
}
