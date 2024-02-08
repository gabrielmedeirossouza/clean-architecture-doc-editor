import { IPresenterFieldDTO, IPresenterMessageDTO, IPresenterNumberNegativeErrorDTO, IPresenterNumberOutsideRangeErrorDTO, IPresenterNumberTooLargeErrorDTO, IPresenterNumberTooSmallErrorDTO, IPresenterNumberZeroErrorDTO, IPresenterStringTooLongErrorDTO, IPresenterStringTooShortErrorDTO } from "../../interfaces/presenters/dtos";

export class PresenterGenericServiceErrorDTO implements IPresenterMessageDTO
{
	public readonly message = "Ocorreu um problema em nossos serviços. Por favor, tente novamente mais tarde.";

	public IsPresentFieldDTO(): this is IPresenterFieldDTO
	{
		return false;
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
		return false;
	}
}
