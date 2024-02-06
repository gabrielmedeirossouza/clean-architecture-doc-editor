import { IFieldDTO, IMessageDTO, IStringTooLongErrorDTO, IStringTooShortErrorDTO, INumberZeroErrorDTO, INumberNegativeErrorDTO, INumberTooLargeErrorDTO, INumberTooSmallErrorDTO, INumberOutsideRangeErrorDTO } from "../interfaces/dtos";

export class NumberTooLargeErrorDTO implements INumberTooLargeErrorDTO {
	public readonly message: string;

	constructor(
        public readonly field: string,
        public readonly value: number,
        public readonly maxValue: number,
	) {
		this.message = `NumberTooLarge: the number cannot be greater than ${maxValue}. Received: ${value}`;
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
		return true;
	}
	
	public isNumberTooSmallDTO(): this is INumberTooSmallErrorDTO {
		return false;
	}

	public isNumberOutsideRangeDTO(): this is INumberOutsideRangeErrorDTO {
		return false;
	}
}