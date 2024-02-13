import { Result } from "@/shared/result";
import { NumberOutsideRangeErrorDTO, StringTooLongErrorDTO, StringTooShortErrorDTO } from "@/use-cases/dtos";
import { IStringTooShortErrorDTO, IStringTooLongErrorDTO, INumberOutsideRangeErrorDTO } from "@/use-cases/interfaces/dtos";
import { ISmartChipValidationService } from "@/use-cases/interfaces/smart-chip";

export class SmartChipValidationService implements ISmartChipValidationService
{
	public readonly LABEL_MIN_LENGTH = 2;

	public readonly LABEL_MAX_LENGTH = 20;

	public readonly PREFIX_MIN_LENGTH = 2;

	public readonly PREFIX_MAX_LENGTH = 10;

	public readonly POSITION_MIN_VALUE = 1;

	public readonly POSITION_MAX_VALUE = 1000;

	public ValidateLabel(label: string): Result<string, IStringTooShortErrorDTO | IStringTooLongErrorDTO>
	{
		if (label.length < this.LABEL_MIN_LENGTH)
		{
			return Result.Secondary(new StringTooShortErrorDTO({ fieldName: "label", value: label, minLength: this.LABEL_MIN_LENGTH }));
		}

		if (label.length > this.LABEL_MAX_LENGTH)
		{
			return Result.Secondary(new StringTooLongErrorDTO({ fieldName: "label", value: label, maxLength: this.LABEL_MAX_LENGTH }));
		}

		return Result.Primary(label);
	}

	public ValidatePrefix(prefix: string): Result<string, IStringTooShortErrorDTO | IStringTooLongErrorDTO>
	{
		if (prefix.length < this.PREFIX_MIN_LENGTH)
		{
			return Result.Secondary(new StringTooShortErrorDTO({ fieldName: "prefix", value: prefix, minLength: this.PREFIX_MIN_LENGTH }));
		}

		if (prefix.length > this.PREFIX_MAX_LENGTH)
		{
			return Result.Secondary(new StringTooLongErrorDTO({ fieldName: "prefix", value: prefix, maxLength: this.PREFIX_MAX_LENGTH }));
		}

		return Result.Primary(prefix);
	}

	public ValidatePosition(position: number): Result<number, INumberOutsideRangeErrorDTO>
	{
		if (position < this.POSITION_MIN_VALUE || position > this.POSITION_MAX_VALUE)
		{
			return Result.Secondary(new NumberOutsideRangeErrorDTO({ fieldName: "position", value: position, minValue: this.POSITION_MIN_VALUE, maxValue: this.POSITION_MAX_VALUE }));
		}

		return Result.Primary(position);
	}
}
