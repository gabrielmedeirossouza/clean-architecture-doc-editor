import { IPresenterFieldDTO, IPresenterMessageDTO, IPresenterNumberNegativeErrorDTO, IPresenterNumberOutsideRangeErrorDTO, IPresenterNumberTooLargeErrorDTO, IPresenterNumberTooSmallErrorDTO, IPresenterNumberZeroErrorDTO, IPresenterStringTooLongErrorDTO, IPresenterStringTooShortErrorDTO } from "../../interfaces/presenters/dtos";

export class PresenterStringTooLongErrorDTO implements IPresenterStringTooLongErrorDTO
{
	public readonly currentLength: number;

	constructor(
    public readonly fieldName: string,
    public readonly message: string,
    public readonly value: string,
    public readonly maxLength: number,
	)
	{
		this.currentLength = value.length;
	}

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
		return true;
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
