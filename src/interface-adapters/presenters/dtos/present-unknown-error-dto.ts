import { IPresentFieldDTO, IPresentMessageDTO, IPresentNumberNegativeErrorDTO, IPresentNumberOutsideRangeErrorDTO, IPresentNumberTooLargeErrorDTO, IPresentNumberTooSmallErrorDTO, IPresentNumberZeroErrorDTO, IPresentStringTooLongErrorDTO, IPresentStringTooShortErrorDTO } from "../../interfaces/presenters/dtos";

export class PresentUnknownErrorDTO implements IPresentMessageDTO {
	public readonly message = "Ocorreu um erro desconhecido.";

	public isPresentFieldDTO(): this is IPresentFieldDTO {
		return false;
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
		return false;
	}
	
	public isPresentNumberTooSmallErrorDTO(): this is IPresentNumberTooSmallErrorDTO {
		return false;
	}

	public isPresentNumberOutsideRangeErrorDTO(): this is IPresentNumberOutsideRangeErrorDTO {
		return false;
	}
}