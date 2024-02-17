import { NumberNegativeErrorDto } from "@/use-cases/interfaces/dtos";

export namespace ConcreteNumberNegativeErrorDto {
    export interface ConstructorParameters<T> {
        code: T;
        fieldName: string;
        value: number;
    }

    export class Dto<T> implements NumberNegativeErrorDto<T>
    {
    	public readonly code: T;

    	public readonly fieldName: string;

    	public readonly value: number;

    	public readonly message: string;

    	constructor({ code, fieldName, value }: ConstructorParameters<T>)
    	{
    		this.code = code;
    		this.fieldName = fieldName;
    		this.value = value;
    		this.message = `ConcreteNumberNegativeErrorDto: Field "${fieldName}" with value "${value}" is negative.`;
    	}
    }
}
