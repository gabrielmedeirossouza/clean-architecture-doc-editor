import { MessageDto } from "@/use-cases/interfaces/dtos";

export namespace ConcreteMessageDto {
    export interface ConstructorParameters<T> {
        code: T;
        message: string;
    }

    export class Dto<T> implements MessageDto<T>
    {
    	public readonly code: T;

    	public readonly message: string;

    	constructor({ code, message }: ConstructorParameters<T>)
    	{
    		this.code = code;
    		this.message = `ConcreteMessageDto: ${message}`;
    	}
    }
}
