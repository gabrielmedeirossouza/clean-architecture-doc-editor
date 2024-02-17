import { NumberTooSmallErrorDto } from "@/use-cases/interfaces/dtos";

export namespace ConcreteNumberTooSmallErrorDto {
    export interface ConstructorParameters<T> {
        code: T;
        fieldName: string;
        value: number;
        minValue: number;
    }

    export class Dto<T> implements NumberTooSmallErrorDto<T>
    {
    	public readonly code: T;

    	public readonly fieldName: string;

    	public readonly value: number;

    	public readonly minValue: number;

    	public readonly message: string;

    	constructor({ code, fieldName, value, minValue }: ConstructorParameters<T>)
    	{
    		this.code = code;
    		this.fieldName = fieldName;
    		this.value = value;
    		this.minValue = minValue;
    		this.message = `ConcreteNumberTooSmallErrorDto: Field "${fieldName}" with value "${value}" cannot be smaller than "${minValue}".`;
    	}
    }
}
