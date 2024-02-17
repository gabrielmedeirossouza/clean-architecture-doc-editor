import { PresenterNumberTooSmallErrorDto } from "@/interface-adapters/interfaces/presenters/dtos";

export namespace ConcretePresenterNumberTooSmallErrorDto {
    export interface ConstructorParameters<T> {
        code: T;
        fieldName: string;
        message: string;
        value: number;
        minValue: number;
    }

    export class Dto<T> implements PresenterNumberTooSmallErrorDto<T>
    {
    	public readonly code: T;

    	public readonly fieldName: string;

    	public readonly message: string;

    	public readonly value: number;

    	public readonly minValue: number;

    	constructor({ code, fieldName, message, value, minValue }: ConstructorParameters<T>)
    	{
    		this.code = code;
    		this.fieldName = fieldName;
    		this.message = message;
    		this.value = value;
    		this.minValue = minValue;
    	}
    }
}
