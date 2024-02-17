import { PresenterStringTooShortErrorDto } from "@/interface-adapters/interfaces/presenters/dtos";

export namespace ConcretePresenterStringTooShortErrorDto {
    export interface ConstructorParameters<T> {
        code: T;
        fieldName: string;
        message: string;
        value: string;
        minLength: number;
    }

    export class Dto<T> implements PresenterStringTooShortErrorDto<T>
    {
    	public readonly code: T;

    	public readonly fieldName: string;

    	public readonly message: string;

    	public readonly value: string;

    	public readonly minLength: number;

    	constructor({ code, fieldName, message, value, minLength }: ConstructorParameters<T>)
    	{
    		this.code = code;
    		this.fieldName = fieldName;
    		this.message = message;
    		this.value = value;
    		this.minLength = minLength;
    	}
    }
}
