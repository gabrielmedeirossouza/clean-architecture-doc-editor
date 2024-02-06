import { IPresentFieldDTO, IPresentMessageDTO, IPresentNumberNegativeErrorDTO, IPresentNumberOutsideRangeErrorDTO, IPresentNumberTooLargeErrorDTO, IPresentNumberTooSmallErrorDTO, IPresentNumberZeroErrorDTO, IPresentStringTooLongErrorDTO, IPresentStringTooShortErrorDTO } from "../../interfaces/presenters/dtos";

export class PresentStringTooShortErrorDTO implements IPresentStringTooShortErrorDTO
{
	public readonly currentLength: number;

	constructor(
    public readonly field: string,
    public readonly message: string,
    public readonly value: string,
    public readonly minLength: number,
	)
	{
		this.currentLength = value.length;
	}

	public IsPresentFieldDTO(): this is IPresentFieldDTO
	{
		return true;
	}

	public IsPresentMessageDTO(): this is IPresentMessageDTO
	{
		return true;
	}

	public IsPresentStringTooShortErrorDTO(): this is IPresentStringTooShortErrorDTO
	{
		return true;
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
