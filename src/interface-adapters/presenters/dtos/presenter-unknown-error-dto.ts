import { PresenterMessageDto } from "@/interface-adapters/interfaces/presenters/dtos";

export namespace ConcretePresenterUnknownErrorDto {
    export interface ConstructorParameters<T> {
        code: T;
    }

    export class Dto<T> implements PresenterMessageDto<T>
    {
    	public readonly code: T;

    	public readonly message = "Ocorreu um erro desconhecido.";

    	constructor({ code }: ConstructorParameters<T>)
    	{
    		this.code = code;
    	}
    }
}
