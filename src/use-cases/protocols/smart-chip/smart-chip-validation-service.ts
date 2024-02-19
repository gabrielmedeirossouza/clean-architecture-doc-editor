import { Result, StringTooLongErrorDto, StringTooShortErrorDto } from "@/shared";

export interface ISmartChipValidationService {
    ValidateLabel(label: string): Result<string, StringTooShortErrorDto<"LABEL_TOO_SHORT"> | StringTooLongErrorDto<"LABEL_TOO_LONG">>;
    ValidatePrefix(prefix: string): Result<string, StringTooShortErrorDto<"PREFIX_TOO_SHORT"> | StringTooLongErrorDto<"PREFIX_TOO_LONG">>;
}
