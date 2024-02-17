import { CannotFindDto } from "@/use-cases/interfaces/dtos";

export namespace ConcreteCannotFindDto {
    export interface ConstructorParameters<T> {
        code: T;
        message: string;
        searchCriteria: string;
        searchValue: string;
        entityName: string;
    }

    export class Dto<T> implements CannotFindDto<T>
    {
    	public readonly code: T;

    	public readonly message: string;

    	public readonly searchCriteria: string;

    	public readonly searchValue: string;

    	public readonly entityName: string;

    	constructor({ code, message, searchCriteria, searchValue, entityName }: ConstructorParameters<T>)
    	{
    		this.code = code;
    		this.message = `ConcreteCannotFindDto: ${message}`;
    		this.searchCriteria = searchCriteria;
    		this.searchValue = searchValue;
    		this.entityName = entityName;
    	}
    }
}
