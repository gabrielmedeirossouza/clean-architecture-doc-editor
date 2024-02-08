import { IFieldDTO, IMessageDTO, IStringTooLongErrorDTO, IStringTooShortErrorDTO, INumberZeroErrorDTO, INumberNegativeErrorDTO, INumberTooLargeErrorDTO, INumberTooSmallErrorDTO, INumberOutsideRangeErrorDTO } from "../../interfaces/dtos";

export interface IStringTooLongErrorDTOConstructorParameters {
    field: string;
    value: string;
    maxLength: number;
}

export class StringTooLongErrorDTO implements IStringTooLongErrorDTO
{
	public readonly currentLength: number;

	public readonly field: string;

	public readonly value: string;

	public readonly maxLength: number;

	public readonly message: string;

	constructor({ field, value, maxLength }: IStringTooLongErrorDTOConstructorParameters)
	{
		this.field = field;
		this.value = value;
		this.maxLength = maxLength;
		this.currentLength = value.length;
		this.message =
            `StringTooLongErrorDTO: Field "${field}" with value "${value}" has a length of "${this.currentLength}" which is longer than the maximum length of "${maxLength}".`;
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
		return true;
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
