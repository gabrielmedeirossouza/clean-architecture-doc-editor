import { IFieldDTO, IMessageDTO, IStringTooLongErrorDTO, IStringTooShortErrorDTO, INumberZeroErrorDTO, INumberNegativeErrorDTO, INumberTooLargeErrorDTO, INumberTooSmallErrorDTO, INumberOutsideRangeErrorDTO, ICannotFindDTO } from "../../interfaces/dtos";

export interface INumberTooSmallErrorDTOConstructorParameters {
    fieldName: string;
    value: number;
    minValue: number;
}

export class NumberTooSmallErrorDTO implements INumberTooSmallErrorDTO
{
	public readonly fieldName: string;

	public readonly value: number;

	public readonly minValue: number;

	public readonly message: string;

	constructor({ fieldName, value, minValue }: INumberTooSmallErrorDTOConstructorParameters)
	{
		this.fieldName = fieldName;
		this.value = value;
		this.minValue = minValue;
		this.message = `NumberTooSmallErrorDTO: Field "${fieldName}" with value "${value}" cannot be smaller than "${minValue}".`;
	}

	public IsFieldDTO(): this is IFieldDTO
	{
		return true;
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
		return true;
	}

	public IsNumberOutsideRangeDTO(): this is INumberOutsideRangeErrorDTO
	{
		return false;
	}

	public IsCannotFindDTO(): this is ICannotFindDTO
	{
		return false;
	}
}
