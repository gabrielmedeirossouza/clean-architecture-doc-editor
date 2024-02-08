import { IPresenterFieldDTO, IPresenterMessageDTO, IPresenterNumberNegativeErrorDTO, IPresenterNumberTooLargeErrorDTO, IPresenterNumberZeroErrorDTO, IPresenterStringTooLongErrorDTO, IPresenterStringTooShortErrorDTO, IPresenterNumberTooSmallErrorDTO, IPresenterNumberOutsideRangeErrorDTO } from "../../interfaces/presenters/dtos";

export class PresenterFieldDTO implements IPresenterFieldDTO
{
	constructor(
    public readonly fieldName: string,
	)
	{}

	public IsPresentFieldDTO(): this is IPresenterFieldDTO
	{
		return true;
	}

	public IsPresentMessageDTO(): this is IPresenterMessageDTO
	{
		return false;
	}

	public IsPresentStringTooShortErrorDTO(): this is IPresenterStringTooShortErrorDTO
	{
		return false;
	}

	public IsPresentStringTooLongErrorDTO(): this is IPresenterStringTooLongErrorDTO
	{
		return false;
	}

	public IsPresentNumberZeroErrorDTO(): this is IPresenterNumberZeroErrorDTO
	{
		return false;
	}

	public IsPresentNumberNegativeErrorDTO(): this is IPresenterNumberNegativeErrorDTO
	{
		return false;
	}

	public IsPresentNumberTooLargeErrorDTO(): this is IPresenterNumberTooLargeErrorDTO
	{
		return false;
	}

	public IsPresentNumberTooSmallErrorDTO(): this is IPresenterNumberTooSmallErrorDTO
	{
		return false;
	}

	public IsPresentNumberOutsideRangeErrorDTO(): this is IPresenterNumberOutsideRangeErrorDTO
	{
		return false;
	}
}
