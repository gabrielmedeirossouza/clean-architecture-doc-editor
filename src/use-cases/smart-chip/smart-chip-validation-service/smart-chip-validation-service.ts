import { Result } from "@/shared/result";
import { NumberOutsideRangeErrorDTO, StringTooLongErrorDTO, StringTooShortErrorDTO } from "@/use-cases/dtos";
import { IStringTooShortErrorDTO, IStringTooLongErrorDTO, INumberOutsideRangeErrorDTO } from "@/use-cases/interfaces/dtos";
import { ILogger } from "@/use-cases/interfaces/logger";
import { ISmartChipValidationService } from "@/use-cases/interfaces/smart-chip";

export interface ISmartChipValidationServiceConstructorParameters {
    logger: ILogger;
}

export class SmartChipValidationService implements ISmartChipValidationService
{
	public readonly NAME_MIN_LENGTH = 2;

	public readonly NAME_MAX_LENGTH = 10;

	public readonly LABEL_MIN_LENGTH = 2;

	public readonly LABEL_MAX_LENGTH = 20;

	public readonly PREFIX_MIN_LENGTH = 2;

	public readonly PREFIX_MAX_LENGTH = 10;

	public readonly POSITION_MIN_VALUE = 1;

	public readonly POSITION_MAX_VALUE = 1000;

	private readonly _logger: ILogger;

	constructor({ logger }: ISmartChipValidationServiceConstructorParameters)
	{
		this._logger = logger;
	}

	public ValidateName(name: string): Result<string, IStringTooShortErrorDTO | IStringTooLongErrorDTO>
	{
		if (name.length < this.NAME_MIN_LENGTH)
		{
			return Result.Fail(new StringTooShortErrorDTO({ field: "name", value: name, minLength: this.NAME_MIN_LENGTH, logger: this._logger }));
		}

		if (name.length > this.NAME_MAX_LENGTH)
		{
			return Result.Fail(new StringTooLongErrorDTO({ field: "name", value: name, maxLength: this.NAME_MAX_LENGTH, logger: this._logger }));
		}

		return Result.Ok(name);
	}

	public ValidateLabel(label: string): Result<string, IStringTooShortErrorDTO | IStringTooLongErrorDTO>
	{
		if (label.length < this.LABEL_MIN_LENGTH)
		{
			return Result.Fail(new StringTooShortErrorDTO({ field: "label", value: label, minLength: this.LABEL_MIN_LENGTH, logger: this._logger }));
		}

		if (label.length > this.LABEL_MAX_LENGTH)
		{
			return Result.Fail(new StringTooLongErrorDTO({ field: "label", value: label, maxLength: this.LABEL_MAX_LENGTH, logger: this._logger }));
		}

		return Result.Ok(label);
	}

	public ValidatePrefix(prefix: string): Result<string, IStringTooShortErrorDTO | IStringTooLongErrorDTO>
	{
		if (prefix.length < this.PREFIX_MIN_LENGTH)
		{
			return Result.Fail(new StringTooShortErrorDTO({ field: "prefix", value: prefix, minLength: this.PREFIX_MIN_LENGTH, logger: this._logger }));
		}

		if (prefix.length > this.PREFIX_MAX_LENGTH)
		{
			return Result.Fail(new StringTooLongErrorDTO({ field: "prefix", value: prefix, maxLength: this.PREFIX_MAX_LENGTH, logger: this._logger }));
		}

		return Result.Ok(prefix);
	}

	public ValidatePosition(position: number): Result<number, INumberOutsideRangeErrorDTO>
	{
		if (position < this.POSITION_MIN_VALUE || position > this.POSITION_MAX_VALUE)
		{
			return Result.Fail(new NumberOutsideRangeErrorDTO({ field: "position", value: position, minValue: this.POSITION_MIN_VALUE, maxValue: this.POSITION_MAX_VALUE, logger: this._logger }));
		}

		return Result.Ok(position);
	}
}
