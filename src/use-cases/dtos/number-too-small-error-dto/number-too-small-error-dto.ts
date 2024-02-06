import { IFieldDTO, IMessageDTO, IStringTooLongErrorDTO, IStringTooShortErrorDTO, INumberZeroErrorDTO, INumberNegativeErrorDTO, INumberTooLargeErrorDTO, INumberTooSmallErrorDTO, INumberOutsideRangeErrorDTO } from "../../interfaces/dtos";

export class NumberTooSmallErrorDTO implements INumberTooSmallErrorDTO
{
	public readonly message: string;

	constructor(
        public readonly field: string,
        public readonly value: number,
        public readonly minValue: number,
	)
	{
		this.message = `NumberTooSmallErrorDTO: The number cannot be less than ${minValue}. Received: ${value}.`;
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
}
