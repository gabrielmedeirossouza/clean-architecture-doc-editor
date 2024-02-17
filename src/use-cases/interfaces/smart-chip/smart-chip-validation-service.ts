import { Result } from "@/cross-cutting-concerns";
import { NumberOutsideRangeErrorDto, StringTooLongErrorDto, StringTooShortErrorDto } from "@/use-cases/interfaces/dtos";

export namespace SmartChipValidationService {
    export interface InputPort {
        ValidateLabel(label: ValidateLabelRequestModel): ValidateLabelResponseModel;
        ValidatePrefix(prefix: ValidatePrefixRequestModel): ValidatePrefixResponseModel;
        ValidatePosition(position: ValidatePositionRequestModel): ValidatePositionResponseModel;
    }

    export interface ValidateLabelRequestModel {
        label: string;
    }

    export interface ValidatePrefixRequestModel {
        prefix: string;
    }

    export interface ValidatePositionRequestModel {
        position: number;
    }

    export interface ValidateLabelResponseModel {
        response: Result<string, StringTooShortErrorDto<Code.LABEL_TOO_SHORT> | StringTooLongErrorDto<Code.LABEL_TOO_LONG>>;
    }

    export interface ValidatePrefixResponseModel {
        response: Result<string, StringTooShortErrorDto<Code.PREFIX_TOO_SHORT> | StringTooLongErrorDto<Code.PREFIX_TOO_LONG>>;
    }

    export interface ValidatePositionResponseModel {
        response: Result<number, NumberOutsideRangeErrorDto<Code.POSITION_OUTSIDE_RANGE>>;
    }

    export enum Code {
        LABEL_TOO_SHORT,
        LABEL_TOO_LONG,
        PREFIX_TOO_SHORT,
        PREFIX_TOO_LONG,
        POSITION_OUTSIDE_RANGE
    }
}
