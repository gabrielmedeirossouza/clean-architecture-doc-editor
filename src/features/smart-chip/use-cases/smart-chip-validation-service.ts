import { ILogger } from "@/cross-cutting-concerns/protocols";
import { Result, StringTooLongErrorDto, StringTooShortErrorDto } from "@/shared";
import { ISmartChipValidationService } from "@/features/smart-chip/protocols";

export class SmartChipValidationService implements ISmartChipValidationService {
    constructor(private readonly logger: ILogger) { }

    public ValidateLabel(label: string): Result<string, StringTooShortErrorDto<"LABEL_TOO_SHORT"> | StringTooLongErrorDto<"LABEL_TOO_LONG">> {
        const LABEL_MIN_LENGTH = 2;
        const LABEL_MAX_LENGTH = 20;

        if (label.length < LABEL_MIN_LENGTH) {
            const dto = new StringTooShortErrorDto("LABEL_TOO_SHORT", "label", label, LABEL_MIN_LENGTH);
            this.logger.Warn(dto.message);

            return Result.Fail(dto);
        }

        if (label.length > LABEL_MAX_LENGTH) {
            const dto = new StringTooLongErrorDto("LABEL_TOO_LONG", "label", label, LABEL_MAX_LENGTH);
            this.logger.Warn(dto.message);

            return Result.Fail(dto);
        }

        return Result.Ok(label);
    }

    public ValidatePrefix(prefix: string): Result<string, StringTooShortErrorDto<"PREFIX_TOO_SHORT"> | StringTooLongErrorDto<"PREFIX_TOO_LONG">> {
        const PREFIX_MIN_LENGTH = 2;
        const PREFIX_MAX_LENGTH = 10;

        if (prefix.length < PREFIX_MIN_LENGTH) {
            const dto = new StringTooShortErrorDto("PREFIX_TOO_SHORT", "prefix", prefix, PREFIX_MIN_LENGTH);
            this.logger.Warn(dto.message);

            return Result.Fail(dto);
        }

        if (prefix.length > PREFIX_MAX_LENGTH) {
            const dto = new StringTooLongErrorDto("PREFIX_TOO_LONG", "prefix", prefix, PREFIX_MAX_LENGTH);
            this.logger.Warn(dto.message);

            return Result.Fail(dto);
        }

        return Result.Ok(prefix);
    }
}
