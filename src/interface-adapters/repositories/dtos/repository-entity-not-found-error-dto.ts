import { IRepositoryCannotFindDTO, IRepositoryEntityNotFoundErrorDTO } from "@/use-cases/interfaces/repository-dtos";

export interface IRepositoryEntityNotFoundErrorDTOConstructorParameters {
    id: string;
    entityName: string;
    message: string;
}

export class RepositoryEntityNotFoundErrorDTO implements IRepositoryEntityNotFoundErrorDTO
{
	public readonly id: string;

	public readonly entityName: string;

	public readonly message: string;

	constructor({ id, entityName, message }: IRepositoryEntityNotFoundErrorDTOConstructorParameters)
	{
		this.id = id;
		this.entityName = entityName;
		this.message = message;
	}

	public IsRepositoryCannotFindDTO(): this is IRepositoryCannotFindDTO
	{
		return false;
	}

	public IsRepositoryEntityNotFoundErrorDTO(): this is IRepositoryEntityNotFoundErrorDTO
	{
		return true;
	}
}
