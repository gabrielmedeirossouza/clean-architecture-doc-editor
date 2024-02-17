import { PresenterNumberTooLargeErrorDto } from "@/interface-adapters/interfaces/presenters/dtos";

export namespace ConcretePresenterNumberTooLargeErrorDto {
    export interface ConstructorParameters<T> {
        code: T;
        fieldName: string;
        message: string;
        value: number;
        maxValue: number;
    }

    export class Dto<T> implements PresenterNumberTooLargeErrorDto<T>
    {
    	public readonly code: T;

    	public readonly fieldName: string;

    	public readonly message: string;

    	public readonly value: number;

    	public readonly maxValue: number;

    	constructor({ code, fieldName, message, value, maxValue }: ConstructorParameters<T>)
    	{
    		this.code = code;
    		this.fieldName = fieldName;
    		this.message = message;
    		this.value = value;
    		this.maxValue = maxValue;
    	}
    }
}
