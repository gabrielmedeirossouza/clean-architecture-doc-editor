import { IPresenterMessageDTO } from "@/interface-adapters/interfaces/presenters/dtos";

interface IPresenterGenericServiceErrorDTOConstructorParameters<T> {
    code: T;
}

export class PresenterGenericServiceErrorDTO<T extends string> implements IPresenterMessageDTO<T>
{
	public readonly code: T;

	public readonly message = "Ocorreu um problema em nossos serviços. Por favor, tente novamente mais tarde.";

	constructor({ code }: IPresenterGenericServiceErrorDTOConstructorParameters<T>)
	{
		this.code = code;
	}
}
