import { IFieldDTO, IMessageDTO, IStringTooLongErrorDTO, IStringTooShortErrorDTO, INumberZeroErrorDTO, INumberNegativeErrorDTO, INumberTooLargeErrorDTO, INumberTooSmallErrorDTO, INumberOutsideRangeErrorDTO } from "../../interfaces/dtos";

export interface INumberNegativeErrorDTOConstructorParameters {
    fieldName: string;
    value: number;
}

export class NumberNegativeErrorDTO implements INumberNegativeErrorDTO
{
	public readonly fieldName: string;

	public readonly value: number;

	public readonly message: string;

	constructor({ fieldName, value }: INumberNegativeErrorDTOConstructorParameters)
	{
		this.fieldName = fieldName;
		this.value = value;
		this.message = `NumberNegativeErrorDTO: Field "${fieldName}" with value "${value}" is negative.`;
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
		return true;
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
}
