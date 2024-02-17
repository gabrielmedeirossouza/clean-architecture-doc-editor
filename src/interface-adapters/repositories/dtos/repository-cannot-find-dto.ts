import { RepositoryCannotFindDto } from "@/use-cases/interfaces/repository-dtos";

export namespace ConcreteRepositoryCannotFindDto {
    export interface ConstructorParameters<T> {
        code: T;
        searchCriteria: string;
        searchValue: string;
        entityName: string;
        message: string;
    }

    export class Dto<T> implements RepositoryCannotFindDto<T>
    {
    	public readonly code: T;

    	public readonly searchCriteria: string;

    	public readonly searchValue: string;

    	public readonly entityName: string;

    	public readonly message: string;

    	constructor({ code, searchCriteria, searchValue, entityName, message }: ConstructorParameters<T>)
    	{
    		this.code = code;
    		this.searchCriteria = searchCriteria;
    		this.searchValue = searchValue;
    		this.entityName = entityName;
    		this.message = message;
    	}
    }
}
