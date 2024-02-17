import { PresenterNumberOutsideRangeErrorDto } from "@/interface-adapters/interfaces/presenters/dtos";

export namespace ConcretePresenterNumberOutsideRangeErrorDto {
    export interface ConstructorParameters<T> {
        code: T;
        fieldName: string;
        message: string;
        value: number;
        minValue: number;
        maxValue: number;
    }

    export class Dto<T> implements PresenterNumberOutsideRangeErrorDto<T>
    {
    	public readonly code: T;

    	public readonly fieldName: string;

    	public readonly message: string;

    	public readonly value: number;

    	public readonly minValue: number;

    	public readonly maxValue: number;

    	constructor({ code, fieldName, message, value, minValue, maxValue }: ConstructorParameters<T>)
    	{
    		this.code = code;
    		this.fieldName = fieldName;
    		this.message = message;
    		this.value = value;
    		this.minValue = minValue;
    		this.maxValue = maxValue;
    	}
    }
}
