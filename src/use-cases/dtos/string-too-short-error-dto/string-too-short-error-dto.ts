import { IFieldDTO, IMessageDTO, IStringTooLongErrorDTO, IStringTooShortErrorDTO, INumberZeroErrorDTO, INumberNegativeErrorDTO, INumberTooLargeErrorDTO, INumberTooSmallErrorDTO, INumberOutsideRangeErrorDTO } from "../../interfaces/dtos";

export interface IStringTooShortErrorDTOConstructorParameters {
    fieldName: string;
    value: string;
    minLength: number;
}

export class StringTooShortErrorDTO implements IStringTooShortErrorDTO
{
	public readonly currentLength: number;

	public readonly fieldName: string;

	public readonly value: string;

	public readonly minLength: number;

	public readonly message: string;

	constructor({ fieldName, value, minLength }: IStringTooShortErrorDTOConstructorParameters)
	{
		this.fieldName = fieldName;
		this.value = value;
		this.minLength = minLength;
		this.currentLength = value.length;
		this.message =
            `StringTooShortErrorDTO: Field "${fieldName}" with value "${value}" has a length of "${this.currentLength}" which is shorter than the minimum length of "${minLength}".`;
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
		return true;
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
