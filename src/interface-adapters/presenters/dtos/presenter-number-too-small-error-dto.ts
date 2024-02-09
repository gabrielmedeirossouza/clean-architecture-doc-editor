import { IPresenterFieldDTO, IPresenterMessageDTO, IPresenterNumberNegativeErrorDTO, IPresenterNumberOutsideRangeErrorDTO, IPresenterNumberTooLargeErrorDTO, IPresenterNumberTooSmallErrorDTO, IPresenterNumberZeroErrorDTO, IPresenterStringTooLongErrorDTO, IPresenterStringTooShortErrorDTO } from "../../interfaces/presenters/dtos";

interface IPresenterNumberTooSmallErrorDTOConstructorParameters {
    fieldName: string;
    message: string;
    value: number;
    minValue: number;
}

export class PresenterNumberTooSmallErrorDTO implements IPresenterNumberTooSmallErrorDTO
{
	public readonly fieldName: string;

	public readonly message: string;

	public readonly value: number;

	public readonly minValue: number;

	constructor({ fieldName, message, value, minValue }: IPresenterNumberTooSmallErrorDTOConstructorParameters)
	{
		this.fieldName = fieldName;
		this.message = message;
		this.value = value;
		this.minValue = minValue;
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
		return true;
	}

	public IsPresentNumberOutsideRangeErrorDTO(): this is IPresenterNumberOutsideRangeErrorDTO
	{
		return false;
	}
}
