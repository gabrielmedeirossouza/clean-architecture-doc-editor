import { PresenterFieldDto } from "@/interface-adapters/interfaces/presenters/dtos";

export namespace ConcretePresenterFieldDto {
    export interface ConstructorParameters<T> {
        code: T;
        fieldName: string;
    }

    export class Dto<T> implements PresenterFieldDto<T>
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

