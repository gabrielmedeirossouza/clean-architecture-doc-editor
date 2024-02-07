import { ILogger } from "@/use-cases/interfaces/logger";
import { IFieldDTO, IMessageDTO, IStringTooLongErrorDTO, IStringTooShortErrorDTO, INumberZeroErrorDTO, INumberNegativeErrorDTO, INumberTooLargeErrorDTO, INumberTooSmallErrorDTO, INumberOutsideRangeErrorDTO } from "../../interfaces/dtos";

export interface INumberTooSmallErrorDTOConstructorParameters {
    field: string;
    value: number;
    minValue: number;
    logger: ILogger;
}

export class NumberTooSmallErrorDTO implements INumberTooSmallErrorDTO
{
	public readonly field: string;

	public readonly value: number;

	public readonly minValue: number;

	public readonly message: string;

	constructor({ field, value, minValue, logger }: INumberTooSmallErrorDTOConstructorParameters)
	{
		this.field = field;
		this.value = value;
		this.minValue = minValue;
		this.message = `NumberTooSmallErrorDTO: Field "${field}" with value "${value}" cannot be smaller than "${minValue}".`;
		logger.LogInfo(this.message);
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
