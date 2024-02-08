import { IFieldDTO, IMessageDTO, IStringTooLongErrorDTO, IStringTooShortErrorDTO, INumberZeroErrorDTO, INumberNegativeErrorDTO, INumberTooLargeErrorDTO, INumberTooSmallErrorDTO, INumberOutsideRangeErrorDTO } from "../../interfaces/dtos";

export interface INumberTooLargeErrorDTOConstructorParameters {
    field: string;
    value: number;
    maxValue: number;
}

export class NumberTooLargeErrorDTO implements INumberTooLargeErrorDTO
{
	public readonly field: string;

	public readonly value: number;

	public readonly maxValue: number;

	public readonly message: string;

	constructor({ field, value, maxValue }: INumberTooLargeErrorDTOConstructorParameters)
	{
		this.field = field;
		this.value = value;
		this.maxValue = maxValue;
		this.message = `NumberTooLargeErrorDTO: Field "${field}" with value "${value}" cannot be larger than "${maxValue}".`;
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
		return true;
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
