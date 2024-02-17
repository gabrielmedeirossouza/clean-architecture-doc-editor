import { FieldDto } from "@/use-cases/interfaces/dtos";

export namespace ConcreteFieldDto {
    export interface ConstructorParameters<T> {
        code: T;
        fieldName: string;
    }

    export class Dto<T> implements FieldDto<T>
    {
    	public readonly code: T;

    	public readonly fieldName: string;

    	constructor({ code, fieldName }: ConstructorParameters<T>)
    	{
    		this.code = code;
    		this.fieldName = fieldName;
    	}
    }

}
