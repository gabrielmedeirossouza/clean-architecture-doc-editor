import { PresenterStringTooLongErrorDto } from "@/interface-adapters/interfaces/presenters/dtos";

export namespace ConcretePresenterStringTooLongErrorDto {
    export interface ConstructorParameters<T> {
        code: T;
        fieldName: string;
        message: string;
        value: string;
        maxLength: number;
    }

    export class Dto<T> implements PresenterStringTooLongErrorDto<T>
    {
    	public readonly code: T;

    	public readonly fieldName: string;

    	public readonly message: string;

    	public readonly value: string;

    	public readonly maxLength: number;

    	constructor({ code, fieldName, message, value, maxLength }: ConstructorParameters<T>)
    	{
    		this.code = code;
    		this.fieldName = fieldName;
    		this.message = message;
    		this.value = value;
    		this.maxLength = maxLength;
    	}
    }
}
