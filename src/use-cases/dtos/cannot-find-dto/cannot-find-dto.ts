import { ICannotFindDTO } from "@/use-cases/interfaces/dtos";

interface ICannotFindDTOConstructorParameters<T> {
    code: T;
    message: string;
    searchCriteria: string;
    searchValue: string;
    entityName: string;
}

export class CannotFindDTO<T extends string> implements ICannotFindDTO<T>
{
	public readonly code: T;

	public readonly message: string;

	public readonly searchCriteria: string;

	public readonly searchValue: string;

	public readonly entityName: string;

	constructor({ code, message, searchCriteria, searchValue, entityName }: ICannotFindDTOConstructorParameters<T>)
	{
		this.code = code;
		this.message = message;
		this.searchCriteria = searchCriteria;
		this.searchValue = searchValue;
		this.entityName = entityName;
	}
}
