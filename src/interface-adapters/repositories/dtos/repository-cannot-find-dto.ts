import { IRepositoryCannotFindDTO } from "@/use-cases/interfaces/repository-dtos";

export interface IRepositoryCannotFindDTOConstructorParameters {
    searchCriteria: string;
    searchValue: string;
    entityName: string;
    message: string;
}

export class RepositoryCannotFindDTO implements IRepositoryCannotFindDTO
{
	public readonly searchCriteria: string;

	public readonly searchValue: string;

	public readonly entityName: string;

	public readonly message: string;

	constructor({ searchCriteria, searchValue, entityName, message }: IRepositoryCannotFindDTOConstructorParameters)
	{
		this.searchCriteria = searchCriteria;
		this.searchValue = searchValue;
		this.entityName = entityName;
		this.message = message;
	}

	public IsRepositoryCannotFindDTO(): this is IRepositoryCannotFindDTO
	{
		return true;
	}
}
