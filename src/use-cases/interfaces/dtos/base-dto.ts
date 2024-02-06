import { IFieldDTO, IMessageDTO, IStringTooLongErrorDTO, IStringTooShortErrorDTO, INumberZeroErrorDTO, INumberNegativeErrorDTO, INumberTooLargeErrorDTO, INumberTooSmallErrorDTO, INumberOutsideRangeErrorDTO } from ".";

export interface IBaseDTO {
	IsFieldDTO(): this is IFieldDTO;
	IsMessageDTO(): this is IMessageDTO;
	IsStringTooLongDTO(): this is IStringTooLongErrorDTO;
	IsStringTooShortDTO(): this is IStringTooShortErrorDTO;
	IsNumberZeroDTO(): this is INumberZeroErrorDTO;
	IsNumberNegativeDTO(): this is INumberNegativeErrorDTO;
	IsNumberTooSmallDTO(): this is INumberTooSmallErrorDTO;
	IsNumberTooLargeDTO(): this is INumberTooLargeErrorDTO;
	IsNumberOutsideRangeDTO(): this is INumberOutsideRangeErrorDTO;
}
