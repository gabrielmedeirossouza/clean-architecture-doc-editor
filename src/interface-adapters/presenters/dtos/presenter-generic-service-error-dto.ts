import { ConcretePresenterMessageDto } from "./presenter-message-dto";

export namespace ConcretePresenterGenericServiceErrorDto {
    export interface ConstructorParameters<T> {
        code: T;
    }

    export class Dto<T> extends ConcretePresenterMessageDto.Dto<T>
    {
    	constructor({ code }: ConstructorParameters<T>)
    	{
    		super({ code, message: "Ocorreu um problema em nossos serviços. Por favor, tente novamente mais tarde." });
    	}
    }
}

