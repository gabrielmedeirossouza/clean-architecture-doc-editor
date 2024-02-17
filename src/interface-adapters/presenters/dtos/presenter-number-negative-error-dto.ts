import { PresenterNumberNegativeErrorDto } from "@/interface-adapters/interfaces/presenters/dtos";

export namespace ConcretePresenterNumberNegativeErrorDto {
    export interface ConstructorParameters<T> {
        code: T;
        fieldName: string;
        message: string;
        value: number;
    }

    export class Dto<T> implements PresenterNumberNegativeErrorDto<T>
    {
    	public readonly code: T;

    	public readonly fieldName: string;

    	public readonly message: string;

    	public readonly value: number;

    	constructor({ code, fieldName, message, value }: ConstructorParameters<T>)
    	{
    		this.code = code;
    		this.fieldName = fieldName;
    		this.message = message;
    		this.value = value;
    	}
    }
}
