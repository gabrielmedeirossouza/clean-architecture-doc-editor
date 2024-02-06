import { IFieldDTO, IMessageDTO, IStringTooLongErrorDTO, IStringTooShortErrorDTO, INumberZeroErrorDTO, INumberNegativeErrorDTO, INumberTooLargeErrorDTO, INumberTooSmallErrorDTO, INumberOutsideRangeErrorDTO } from "../interfaces/dtos";

export class StringTooShortErrorDTO implements IStringTooShortErrorDTO {
	public readonly currentLength: number;
	public readonly message: string;

	constructor(
				public readonly field: string,
				public readonly value: string,
				public readonly minLength: number
	) {
		this.currentLength = value.length;
		this.message =
			`StringTooShort: field ${this.field} is too short. Min length ${this.minLength}. Current length: ${this.currentLength}. Provided value: ${this.value}`;
	}

	public isFieldDTO(): this is IFieldDTO {
		return true;
	}

	public isMessageDTO(): this is IMessageDTO {
		return true;
	}

	public isStringTooShortDTO(): this is IStringTooShortErrorDTO {
		return true;
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
