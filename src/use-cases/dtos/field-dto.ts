import { IFieldDTO, IMessageDTO, IStringTooLongErrorDTO, IStringTooShortErrorDTO, INumberZeroErrorDTO, INumberNegativeErrorDTO, INumberTooLargeErrorDTO, INumberTooSmallErrorDTO, INumberOutsideRangeErrorDTO } from "../interfaces/dtos";

export class FieldDTO implements IFieldDTO {
	constructor(
		public readonly field: string
	) {}

	public isFieldDTO(): this is IFieldDTO {
		return true;
	}

	public isMessageDTO(): this is IMessageDTO {
		return false;
	}

	public isStringTooShortDTO(): this is IStringTooShortErrorDTO {
		return false;
	}

	public isStringTooLongDTO(): this is IStringTooLongErrorDTO {
		return false;
	}

	public isNumberZeroDTO(): this is INumberZeroErrorDTO {
		return false;
	}

	public isNumberNegativeDTO(): this is INumberNegativeErrorDTO {
		return false;
	}

	public isNumberTooLargeDTO(): this is INumberTooLargeErrorDTO {
		return false;
	}

	public isNumberTooSmallDTO(): this is INumberTooSmallErrorDTO {
		return false;
	}

	public isNumberOutsideRangeDTO(): this is INumberOutsideRangeErrorDTO {
		return false;
	}
}
