import { IFieldDTO, IMessageDTO, IStringTooLongErrorDTO, IStringTooShortErrorDTO, INumberZeroErrorDTO, INumberNegativeErrorDTO, INumberTooLargeErrorDTO, INumberTooSmallErrorDTO, INumberOutsideRangeErrorDTO } from "../../interfaces/dtos";

export class FieldDTO implements IFieldDTO
{
	constructor(
		public readonly field: string
	)
	{}

	public IsFieldDTO(): this is IFieldDTO
	{
		return true;
	}

	public IsMessageDTO(): this is IMessageDTO
	{
		return false;
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
}
