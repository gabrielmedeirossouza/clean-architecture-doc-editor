import { IFieldDTO, IMessageDTO, IStringTooLongErrorDTO, IStringTooShortErrorDTO, INumberZeroErrorDTO, INumberNegativeErrorDTO, INumberTooLargeErrorDTO, INumberTooSmallErrorDTO, INumberOutsideRangeErrorDTO } from "../../interfaces/dtos";

export interface INumberOutsideRangeErrorDTOConstructorParameters {
    field: string;
    value: number;
    minValue: number;
    maxValue: number;
}

export class NumberOutsideRangeErrorDTO implements INumberOutsideRangeErrorDTO
{
	public readonly field: string;

	public readonly value: number;

	public readonly minValue: number;

	public readonly maxValue: number;

	public readonly message: string;

	constructor({ field, value, minValue, maxValue }: INumberOutsideRangeErrorDTOConstructorParameters)
	{
		this.field = field;
		this.value = value;
		this.minValue = minValue;
		this.maxValue = maxValue;
		this.message = `NumberOutsideRangeErrorDTO: Field "${field}" with value "${value}" is outside the range of "${minValue}" and "${maxValue}".`;
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
		return false;
	}

	public IsNumberOutsideRangeDTO(): this is INumberOutsideRangeErrorDTO
	{
		return true;
	}
}
