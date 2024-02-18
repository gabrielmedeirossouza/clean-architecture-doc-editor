import { Result } from "@/shared";
import { StringTooLongErrorDto, StringTooShortErrorDto } from "@/use-cases/interfaces/dtos";

export namespace SmartChipValidationService {
    export interface InputPort {
        ValidateLabel(label: ValidateLabelRequestModel): ValidateLabelResponseModel;
        ValidatePrefix(prefix: ValidatePrefixRequestModel): ValidatePrefixResponseModel;
    }

    export interface ValidateLabelRequestModel {
        label: string;
    }

    export interface ValidatePrefixRequestModel {
        prefix: string;
    }

    export interface ValidateLabelResponseModel {
        response: Result<string, StringTooShortErrorDto<Code.LABEL_TOO_SHORT> | StringTooLongErrorDto<Code.LABEL_TOO_LONG>>;
    }

    export interface ValidatePrefixResponseModel {
        response: Result<string, StringTooShortErrorDto<Code.PREFIX_TOO_SHORT> | StringTooLongErrorDto<Code.PREFIX_TOO_LONG>>;
    }

    export enum Code {
        LABEL_TOO_SHORT,
        LABEL_TOO_LONG,
        PREFIX_TOO_SHORT,
        PREFIX_TOO_LONG
    }
}
