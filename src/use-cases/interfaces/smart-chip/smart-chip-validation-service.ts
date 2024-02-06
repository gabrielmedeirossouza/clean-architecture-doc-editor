import { Result } from "../../../shared/result";
import { INumberOutsideRangeErrorDTO, IStringTooLongErrorDTO, IStringTooShortErrorDTO } from "../dtos";

export interface ISmartChipValidationService {
  readonly NAME_MIN_LENGTH: number;
  readonly NAME_MAX_LENGTH: number;
  readonly LABEL_MIN_LENGTH: number;
  readonly LABEL_MAX_LENGTH: number;
  readonly PREFIX_MIN_LENGTH: number;
  readonly PREFIX_MAX_LENGTH: number;
  readonly POSITION_MIN_VALUE: number;
  readonly POSITION_MAX_VALUE: number;
  ValidateName(name: string): Result<string, IStringTooShortErrorDTO | IStringTooLongErrorDTO>;
  ValidateLabel(label: string): Result<string, IStringTooShortErrorDTO | IStringTooLongErrorDTO>;
  ValidatePrefix(prefix: string): Result<string, IStringTooShortErrorDTO | IStringTooLongErrorDTO>;
  ValidatePosition(position: number): Result<number, INumberOutsideRangeErrorDTO>;
}
