import { Result } from "@/cross-cutting-concerns";
import { PersistedEntity, SmartChip } from "@/entities/interfaces";
import { CannotFindDto, MessageDto, NumberOutsideRangeErrorDto, StringTooLongErrorDto, StringTooShortErrorDto } from "@/use-cases/interfaces/dtos";
import { SmartChipValidationService } from "./smart-chip-validation-service";

export namespace EditSmartChipUseCase {
    export interface InputPort {
        Edit(requestModel: EditRequestModel): Promise<void>;
    }

    export interface OutputPort {
        EditResponse(responseModel: EditResponseModel): void;
    }

    export interface EditRequestModel {
        id: string;
        label?: string;
        prefix?: string;
        position?: number;
    }

    export interface EditResponseModel {
        response: Result<
            PersistedEntity<SmartChip>,
            CannotFindDto<Code.SMART_CHIP_NOT_FOUND> |
            MessageDto<Code.LABEL_ALREADY_EXISTS> |
            MessageDto<Code.PREFIX_ALREADY_EXISTS> |
            MessageDto<Code.POSITION_ALREADY_EXISTS> |
            StringTooShortErrorDto<SmartChipValidationService.Code.LABEL_TOO_SHORT> |
            StringTooShortErrorDto<SmartChipValidationService.Code.PREFIX_TOO_SHORT> |
            StringTooLongErrorDto<SmartChipValidationService.Code.LABEL_TOO_LONG> |
            StringTooLongErrorDto<SmartChipValidationService.Code.PREFIX_TOO_LONG> |
            NumberOutsideRangeErrorDto<SmartChipValidationService.Code.POSITION_OUTSIDE_RANGE>
        >;
    }

    export enum Code {
        SMART_CHIP_NOT_FOUND,
        LABEL_ALREADY_EXISTS,
        PREFIX_ALREADY_EXISTS,
        POSITION_ALREADY_EXISTS,
    }
}

