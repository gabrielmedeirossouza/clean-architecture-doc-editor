import { ConcreteMessageDto } from "@/use-cases/dtos/message-dto";

export namespace ConcreteGenericServiceErrorDto {
    export interface ConstructorParameters<T> {
        code: T
    }

    export class Dto<T> extends ConcreteMessageDto.Dto<T>
    {
    	constructor({ code }: ConstructorParameters<T>)
    	{
    		{
    			super({ code, message: "ConcreteGenericServiceErrorDto: Generic Service Error." });
    		}
    	}
    }
}
