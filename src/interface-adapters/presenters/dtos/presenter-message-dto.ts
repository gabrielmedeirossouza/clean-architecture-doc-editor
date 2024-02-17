import { PresenterMessageDto } from "@/interface-adapters/interfaces/presenters/dtos";

export namespace ConcretePresenterMessageDto {
    export interface ConstructorParameters<T> {
        code: T;
        message: string;
    }

    export class Dto<T> implements PresenterMessageDto<T>
    {
    	public readonly code: T;

    	public readonly message: string;

    	constructor({ code, message }: ConstructorParameters<T>)
    	{
    		this.code = code;
    		this.message = message;
    	}
    }
}
