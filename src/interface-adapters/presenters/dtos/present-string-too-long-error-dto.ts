import { IPresentFieldDTO, IPresentMessageDTO, IPresentNumberNegativeErrorDTO, IPresentNumberOutsideRangeErrorDTO, IPresentNumberTooLargeErrorDTO, IPresentNumberTooSmallErrorDTO, IPresentNumberZeroErrorDTO, IPresentStringTooLongErrorDTO, IPresentStringTooShortErrorDTO } from "../../interfaces/presenters/dtos";

export class PresentStringTooLongErrorDTO implements IPresentStringTooLongErrorDTO {
	public readonly currentLength: number;

	constructor(
    public readonly field: string,
    public readonly message: string,
    public readonly value: string,
    public readonly maxLength: number,
	) {
		this.currentLength = value.length;
	}

	public isPresentFieldDTO(): this is IPresentFieldDTO {
		return true;
	}

	public isPresentMessageDTO(): this is IPresentMessageDTO {
		return true;
	}

	public isPresentStringTooShortErrorDTO(): this is IPresentStringTooShortErrorDTO {
		return false;
	}

	public isPresentStringTooLongErrorDTO(): this is IPresentStringTooLongErrorDTO {
		return true;
	}

	public isPresentNumberZeroErrorDTO(): this is IPresentNumberZeroErrorDTO {
		return false;
	}

	public isPresentNumberNegativeErrorDTO(): this is IPresentNumberNegativeErrorDTO {
		return false;
	}

	public isPresentNumberTooLargeErrorDTO(): this is IPresentNumberTooLargeErrorDTO {
		return false;
	}
	
	public isPresentNumberTooSmallErrorDTO(): this is IPresentNumberTooSmallErrorDTO {
		return false;
	}

	public isPresentNumberOutsideRangeErrorDTO(): this is IPresentNumberOutsideRangeErrorDTO {
		return false;
	}
}