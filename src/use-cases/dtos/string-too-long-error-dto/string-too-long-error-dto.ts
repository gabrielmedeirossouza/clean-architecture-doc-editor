import { IFieldDTO, IMessageDTO, IStringTooLongErrorDTO, IStringTooShortErrorDTO, INumberZeroErrorDTO, INumberNegativeErrorDTO, INumberTooLargeErrorDTO, INumberTooSmallErrorDTO, INumberOutsideRangeErrorDTO, ICannotFindDTO } from "../../interfaces/dtos";

export interface IStringTooLongErrorDTOConstructorParameters {
    fieldName: string;
    value: string;
    maxLength: number;
}

export class StringTooLongErrorDTO implements IStringTooLongErrorDTO
{
	public readonly currentLength: number;

	public readonly fieldName: string;

	public readonly value: string;

	public readonly maxLength: number;

	public readonly message: string;

	constructor({ fieldName, value, maxLength }: IStringTooLongErrorDTOConstructorParameters)
	{
		this.fieldName = fieldName;
		this.value = value;
		this.maxLength = maxLength;
		this.currentLength = value.length;
		this.message =
            `StringTooLongErrorDTO: Field "${fieldName}" with value "${value}" has a length of "${this.currentLength}" which is longer than the maximum length of "${maxLength}".`;
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

	public IsCannotFindDTO(): this is ICannotFindDTO
	{
		return false;
	}
}
