import { NumberTooLargeErrorDto } from "@/use-cases/interfaces/dtos";

export namespace ConcreteNumberTooLargeDto {
    export interface ConstructorParameters<T> {
        code: T;
        fieldName: string;
        value: number;
        maxValue: number;
    }

    export class Dto<T> implements NumberTooLargeErrorDto<T>
    {
    	public readonly code: T;

    	public readonly fieldName: string;

    	public readonly value: number;

    	public readonly maxValue: number;

    	public readonly message: string;

    	constructor({ code, fieldName, value, maxValue }: ConstructorParameters<T>)
    	{
    		this.code = code;
    		this.fieldName = fieldName;
    		this.value = value;
    		this.maxValue = maxValue;
    		this.message = `ConcreteNumberTooLargeDto: Field "${fieldName}" with value "${value}" cannot be larger than "${maxValue}".`;
    	}
    }
}
