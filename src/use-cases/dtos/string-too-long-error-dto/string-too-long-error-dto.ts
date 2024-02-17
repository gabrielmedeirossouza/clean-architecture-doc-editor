import { StringTooLongErrorDto } from "@/use-cases/interfaces/dtos";

export namespace ConcreteStringTooLongErrorDto {
    interface ConstructorParameters<T> {
        code: T;
        fieldName: string;
        value: string;
        maxLength: number;
    }

    export class Dto<T> implements StringTooLongErrorDto<T>
    {
    	public readonly code: T;

    	public readonly fieldName: string;

    	public readonly value: string;

    	public readonly maxLength: number;

    	public readonly message: string;

    	constructor({ code, fieldName, value, maxLength }: ConstructorParameters<T>)
    	{
    		this.code = code;
    		this.fieldName = fieldName;
    		this.value = value;
    		this.maxLength = maxLength;
    		this.message =
                `ConcreteStringTooLongErrorDto: Field "${fieldName}" with value "${value}" has a length of "${value.length}" which is longer than the maximum length of "${maxLength}".`;
    	}
    }
}
