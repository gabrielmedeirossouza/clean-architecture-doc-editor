import { IPresentFieldDTO, IPresentMessageDTO, IPresentNumberNegativeErrorDTO, IPresentNumberTooLargeErrorDTO, IPresentNumberZeroErrorDTO, IPresentStringTooLongErrorDTO, IPresentStringTooShortErrorDTO, IPresentNumberTooSmallErrorDTO, IPresentNumberOutsideRangeErrorDTO } from "../../interfaces/presenters/dtos";

export class PresentFieldDTO implements IPresentFieldDTO {
	constructor(
    public readonly field: string,
	) {}

	public isPresentFieldDTO(): this is IPresentFieldDTO {
		return true;
	}

	public isPresentMessageDTO(): this is IPresentMessageDTO {
		return false;
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
		return false;
	}

	public isPresentNumberTooSmallErrorDTO(): this is IPresentNumberTooSmallErrorDTO {
		return false;
	}

	public isPresentNumberOutsideRangeErrorDTO(): this is IPresentNumberOutsideRangeErrorDTO {
		return false;
	}
}