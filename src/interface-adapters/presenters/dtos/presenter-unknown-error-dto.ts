import { IPresenterMessageDTO } from "@/interface-adapters/interfaces/presenters/dtos";

interface IPresenterUnknownErrorDTOConstructorParameters<T> {
    code: T;
}

export class PresenterUnknownErrorDTO<T extends string> implements IPresenterMessageDTO<T>
{
	public readonly code: T;

	public readonly message = "Ocorreu um erro desconhecido.";

	constructor({ code }: IPresenterUnknownErrorDTOConstructorParameters<T>)
	{
		this.code = code;
	}
}
