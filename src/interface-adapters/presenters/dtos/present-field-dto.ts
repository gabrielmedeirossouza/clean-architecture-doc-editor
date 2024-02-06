import { IPresentFieldDTO, IPresentMessageDTO, IPresentNumberNegativeErrorDTO, IPresentNumberTooLargeErrorDTO, IPresentNumberZeroErrorDTO, IPresentStringTooLongErrorDTO, IPresentStringTooShortErrorDTO, IPresentNumberTooSmallErrorDTO, IPresentNumberOutsideRangeErrorDTO } from "../../interfaces/presenters/dtos";

export class PresentFieldDTO implements IPresentFieldDTO
{
	constructor(
    public readonly field: string,
	)
	{}

	public IsPresentFieldDTO(): this is IPresentFieldDTO
	{
		return true;
	}

	public IsPresentMessageDTO(): this is IPresentMessageDTO
	{
		return false;
	}

	public IsPresentStringTooShortErrorDTO(): this is IPresentStringTooShortErrorDTO
	{
		return false;
	}

	public IsPresentStringTooLongErrorDTO(): this is IPresentStringTooLongErrorDTO
	{
		return false;
	}

	public IsPresentNumberZeroErrorDTO(): this is IPresentNumberZeroErrorDTO
	{
		return false;
	}

	public IsPresentNumberNegativeErrorDTO(): this is IPresentNumberNegativeErrorDTO
	{
		return false;
	}

	public IsPresentNumberTooLargeErrorDTO(): this is IPresentNumberTooLargeErrorDTO
	{
		return false;
	}

	public IsPresentNumberTooSmallErrorDTO(): this is IPresentNumberTooSmallErrorDTO
	{
		return false;
	}

	public IsPresentNumberOutsideRangeErrorDTO(): this is IPresentNumberOutsideRangeErrorDTO
	{
		return false;
	}
}
