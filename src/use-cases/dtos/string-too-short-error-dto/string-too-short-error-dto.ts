import { StringTooShortErrorDto } from "@/use-cases/interfaces/dtos";

export namespace ConcreteStringTooShortErrorDto {
    interface ConstructorParameters<T> {
        code: T;
        fieldName: string;
        value: string;
        minLength: number;
    }

    export class Dto<T> implements StringTooShortErrorDto<T>
    {
    	public readonly code: T;

    	public readonly fieldName: string;

    	public readonly value: string;

    	public readonly minLength: number;

    	public readonly message: string;

    	constructor({ code, fieldName, value, minLength }: ConstructorParameters<T>)
    	{
    		this.code = code;
    		this.fieldName = fieldName;
    		this.value = value;
    		this.minLength = minLength;
    		this.message =
                `ConcreteStringTooShortErrorDto: Field "${fieldName}" with value "${value}" has a length of "${value.length}" which is shorter than the minimum length of "${minLength}".`;
    	}
    }
}
