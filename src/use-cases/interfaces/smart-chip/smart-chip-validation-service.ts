import { Result } from "../../../shared/result";
import { INumberOutsideRangeErrorDTO, IStringTooLongErrorDTO, IStringTooShortErrorDTO } from "../dtos";

export interface ISmartChipValidationService {
  readonly LABEL_MIN_LENGTH: number;
  readonly LABEL_MAX_LENGTH: number;
  readonly PREFIX_MIN_LENGTH: number;
  readonly PREFIX_MAX_LENGTH: number;
  readonly POSITION_MIN_VALUE: number;
  readonly POSITION_MAX_VALUE: number;
  ValidateLabel(label: string): Result<string, IStringTooShortErrorDTO<"LABEL_TOO_SHORT"> | IStringTooLongErrorDTO<"LABEL_TOO_LONG">>;
  ValidatePrefix(prefix: string): Result<string, IStringTooShortErrorDTO<"PREFIX_TOO_SHORT"> | IStringTooLongErrorDTO<"PREFIX_TOO_LONG">>;
  ValidatePosition(position: number): Result<number, INumberOutsideRangeErrorDTO<"POSITION_OUTSIDE_RANGE">>;
}
