import { Result } from "@/shared/result";
import { NumberOutsideRangeErrorDTO, StringTooLongErrorDTO, StringTooShortErrorDTO } from "@/use-cases/dtos";
import { IStringTooShortErrorDTO, IStringTooLongErrorDTO, INumberOutsideRangeErrorDTO } from "@/use-cases/interfaces/dtos";
import { ISmartChipValidationService } from "@/use-cases/interfaces/smart-chip";

export class SmartChipValidationService implements ISmartChipValidationService {
	public readonly NAME_MIN_LENGTH = 2;
	public readonly NAME_MAX_LENGTH = 10;
	public readonly LABEL_MIN_LENGTH = 2;
	public readonly LABEL_MAX_LENGTH = 20;
	public readonly PREFIX_MIN_LENGTH = 2;
	public readonly PREFIX_MAX_LENGTH = 10;
	public readonly POSITION_MIN_VALUE = 1;
	public readonly POSITION_MAX_VALUE = 1000;

	public validateName(name: string): Result<string, IStringTooShortErrorDTO | IStringTooLongErrorDTO> {
		if (name.length < this.NAME_MIN_LENGTH)
			return Result.fail(new StringTooShortErrorDTO("name", name, this.NAME_MIN_LENGTH));
    
		if (name.length > this.NAME_MAX_LENGTH)
			return Result.fail(new StringTooLongErrorDTO("name", name, this.NAME_MAX_LENGTH));

		return Result.ok(name);
	}

	public validateLabel(label: string): Result<string, IStringTooShortErrorDTO | IStringTooLongErrorDTO> {
		if (label.length < this.LABEL_MIN_LENGTH)
			return Result.fail(new StringTooShortErrorDTO("label", label, this.LABEL_MIN_LENGTH));
    
		if (label.length > this.LABEL_MAX_LENGTH)
			return Result.fail(new StringTooLongErrorDTO("label", label, this.LABEL_MAX_LENGTH));

		return Result.ok(label);
	}

	public validatePrefix(prefix: string): Result<string, IStringTooShortErrorDTO | IStringTooLongErrorDTO> {
		if (prefix.length < this.PREFIX_MIN_LENGTH)
			return Result.fail(new StringTooShortErrorDTO("prefix", prefix, this.PREFIX_MIN_LENGTH));
    
		if (prefix.length > this.PREFIX_MAX_LENGTH)
			return Result.fail(new StringTooLongErrorDTO("prefix", prefix, this.PREFIX_MAX_LENGTH));

		return Result.ok(prefix);
	}

	public validatePosition(position: number): Result<number, INumberOutsideRangeErrorDTO> {
		if (position < this.POSITION_MIN_VALUE || position > this.POSITION_MAX_VALUE)
			return Result.fail(new NumberOutsideRangeErrorDTO("position", position, this.POSITION_MIN_VALUE, this.POSITION_MAX_VALUE));

		return Result.ok(position);
	}
}