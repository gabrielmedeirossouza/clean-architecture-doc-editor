import { ILogger } from "@/use-cases/interfaces/logger";
import { IFieldDTO, IMessageDTO, IStringTooLongErrorDTO, IStringTooShortErrorDTO, INumberZeroErrorDTO, INumberNegativeErrorDTO, INumberTooLargeErrorDTO, INumberTooSmallErrorDTO, INumberOutsideRangeErrorDTO } from "../../interfaces/dtos";

export interface IMessageDTOConstructorParameters {
    message: string;
    logger: ILogger;
}

export class MessageDTO implements IMessageDTO
{
	public readonly message: string;

	constructor({ message, logger }: IMessageDTOConstructorParameters)
	{
		this.message = message;
		logger.Log(message);
	}

	public IsFieldDTO(): this is IFieldDTO
	{
		return false;
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
		return false;
	}
}
