import { IFieldDTO, IMessageDTO, IStringTooLongErrorDTO, IStringTooShortErrorDTO, INumberZeroErrorDTO, INumberNegativeErrorDTO, INumberTooLargeErrorDTO, INumberTooSmallErrorDTO, INumberOutsideRangeErrorDTO, ICannotFindDTO } from "../../interfaces/dtos";

export interface ICannotFindDTOConstructorParameters {
    message: string;
    searchCriteria: string;
    searchValue: string;
    entityName: string;
}

export class CannotFindDTO implements ICannotFindDTO
{
	public readonly message: string;

	public readonly searchCriteria: string;

	public readonly searchValue: string;

	public readonly entityName: string;

	constructor({ message, searchCriteria, searchValue, entityName }: ICannotFindDTOConstructorParameters)
	{
		this.message = message;
		this.searchCriteria = searchCriteria;
		this.searchValue = searchValue;
		this.entityName = entityName;
	}

	public IsFieldDTO(): this is IFieldDTO
	{
		return false;
	}

	public IsMessageDTO(): this is IMessageDTO
	{
		return true;
	}

	public IsStringTooShortDTO(): this is IStringTooShortErrorDTO
	{
		return false;
	}

	public IsStringTooLongDTO(): this is IStringTooLongErrorDTO
	{
		return false;
	}

	public IsNumberZeroDTO(): this is INumberZeroErrorDTO
	{
		return false;
	}

	public IsNumberNegativeDTO(): this is INumberNegativeErrorDTO
	{
		return false;
	}

	public IsNumberTooLargeDTO(): this is INumberTooLargeErrorDTO
	{
		return false;
	}

	public IsNumberTooSmallDTO(): this is INumberTooSmallErrorDTO
	{
		return false;
	}

	public IsNumberOutsideRangeDTO(): this is INumberOutsideRangeErrorDTO
	{
		return false;
	}

	public IsCannotFindDTO(): this is ICannotFindDTO
	{
		return true;
	}
}
