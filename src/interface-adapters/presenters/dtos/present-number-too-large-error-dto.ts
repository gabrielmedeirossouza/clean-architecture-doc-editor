import { IPresentFieldDTO, IPresentMessageDTO, IPresentNumberNegativeErrorDTO, IPresentNumberOutsideRangeErrorDTO, IPresentNumberTooLargeErrorDTO, IPresentNumberTooSmallErrorDTO, IPresentNumberZeroErrorDTO, IPresentStringTooLongErrorDTO, IPresentStringTooShortErrorDTO } from "../../interfaces/presenters/dtos";

export class PresentNumberTooLargeErrorDTO implements IPresentNumberTooLargeErrorDTO {
	constructor(
    public readonly field: string,
    public readonly message: string,
    public readonly value: number,
    public readonly maxValue: number,
	) {}

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
		return false;
	}

	public isPresentNumberZeroErrorDTO(): this is IPresentNumberZeroErrorDTO {
		return false;
	}

	public isPresentNumberNegativeErrorDTO(): this is IPresentNumberNegativeErrorDTO {
		return false;
	}

	public isPresentNumberTooLargeErrorDTO(): this is IPresentNumberTooLargeErrorDTO {
		return true;
	}
	
	public isPresentNumberTooSmallErrorDTO(): this is IPresentNumberTooSmallErrorDTO {
		return false;
	}

	public isPresentNumberOutsideRangeErrorDTO(): this is IPresentNumberOutsideRangeErrorDTO {
		return false;
	}
}