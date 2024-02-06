import { IFieldDTO, IMessageDTO, IStringTooLongErrorDTO, IStringTooShortErrorDTO, INumberZeroErrorDTO, INumberNegativeErrorDTO, INumberTooLargeErrorDTO, INumberTooSmallErrorDTO, INumberOutsideRangeErrorDTO } from ".";

export interface IBaseDTO {
	isFieldDTO(): this is IFieldDTO;
	isMessageDTO(): this is IMessageDTO;
	isStringTooLongDTO(): this is IStringTooLongErrorDTO;
	isStringTooShortDTO(): this is IStringTooShortErrorDTO;
	isNumberZeroDTO(): this is INumberZeroErrorDTO;
	isNumberNegativeDTO(): this is INumberNegativeErrorDTO;
	isNumberTooSmallDTO(): this is INumberTooSmallErrorDTO;
	isNumberTooLargeDTO(): this is INumberTooLargeErrorDTO;
	isNumberOutsideRangeDTO(): this is INumberOutsideRangeErrorDTO;
}
