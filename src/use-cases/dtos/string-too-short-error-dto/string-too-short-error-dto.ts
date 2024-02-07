import { ILogger } from "@/use-cases/interfaces/logger";
import { IFieldDTO, IMessageDTO, IStringTooLongErrorDTO, IStringTooShortErrorDTO, INumberZeroErrorDTO, INumberNegativeErrorDTO, INumberTooLargeErrorDTO, INumberTooSmallErrorDTO, INumberOutsideRangeErrorDTO } from "../../interfaces/dtos";

export interface IStringTooShortErrorDTOConstructorParameters {
    field: string;
    value: string;
    minLength: number;
    logger: ILogger;
}

export class StringTooShortErrorDTO implements IStringTooShortErrorDTO
{
	public readonly currentLength: number;

	public readonly field: string;

	public readonly value: string;

	public readonly minLength: number;

	public readonly message: string;

	constructor({ field, value, minLength, logger }: IStringTooShortErrorDTOConstructorParameters)
	{
		this.field = field;
		this.value = value;
		this.minLength = minLength;
		this.currentLength = value.length;
		this.message =
            `StringTooShortErrorDTO: Field "${field}" with value "${value}" has a length of "${this.currentLength}" which is shorter than the minimum length of "${minLength}".`;
		logger.Log(this.message);
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
