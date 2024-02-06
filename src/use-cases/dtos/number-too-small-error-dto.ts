import { IFieldDTO, IMessageDTO, IStringTooLongErrorDTO, IStringTooShortErrorDTO, INumberZeroErrorDTO, INumberNegativeErrorDTO, INumberTooLargeErrorDTO, INumberTooSmallErrorDTO, INumberOutsideRangeErrorDTO } from "../interfaces/dtos";

export class NumberTooSmallErrorDTO implements INumberTooSmallErrorDTO {
	public readonly message: string;

	constructor(
        public readonly field: string,
        public readonly value: number,
        public readonly minValue: number,
	) {
		this.message = `NumberTooSmall: the number cannot be less than ${minValue}. Received: ${value}`;
	}

	public isFieldDTO(): this is IFieldDTO {
		return true;
	}

	public isMessageDTO(): this is IMessageDTO {
		return true;
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
		return true;
	}

	public isNumberOutsideRangeDTO(): this is INumberOutsideRangeErrorDTO {
		return false;
	}
}