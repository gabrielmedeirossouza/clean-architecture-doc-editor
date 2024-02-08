import { IPresenterFieldDTO, IPresenterMessageDTO, IPresenterNumberNegativeErrorDTO, IPresenterNumberOutsideRangeErrorDTO, IPresenterNumberTooLargeErrorDTO, IPresenterNumberTooSmallErrorDTO, IPresenterNumberZeroErrorDTO, IPresenterStringTooLongErrorDTO, IPresenterStringTooShortErrorDTO } from "../../interfaces/presenters/dtos";

export class PresenterNumberOutsideRangeErrorDTO implements IPresenterNumberOutsideRangeErrorDTO
{
	constructor(
    public readonly fieldName: string,
    public readonly message: string,
    public readonly value: number,
    public readonly minValue: number,
    public readonly maxValue: number,
	)
	{}

	public IsPresentFieldDTO(): this is IPresenterFieldDTO
	{
		return true;
	}

	public IsPresentMessageDTO(): this is IPresenterMessageDTO
	{
		return true;
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
		return true;
	}
}
