import { Result } from "@/shared";
import { PersistedEntity, SmartChip } from "@/entities/interfaces";
import { MessageDto, StringTooLongErrorDto, StringTooShortErrorDto } from "@/use-cases/interfaces/dtos";
import { SmartChipValidationService } from "./smart-chip-validation-service";

export namespace CreateSmartChipUseCase {
    export interface InputPort {
        Create(requestModel: CreateRequestModel): Promise<void>;
    }

    export interface OutputPort {
        CreateResponse(responseModel: CreateResponseModel): void;
    }

    export interface CreateRequestModel {
        label: string;
        prefix: string;
    }

    export interface CreateResponseModel {
        response: Result<
            PersistedEntity<SmartChip>,
            MessageDto<Code.GENERIC_SERVICE_ERROR> |
            MessageDto<Code.LABEL_ALREADY_EXISTS> |
            MessageDto<Code.PREFIX_ALREADY_EXISTS> |
            StringTooShortErrorDto<SmartChipValidationService.Code.LABEL_TOO_SHORT> |
            StringTooShortErrorDto<SmartChipValidationService.Code.PREFIX_TOO_SHORT> |
            StringTooLongErrorDto<SmartChipValidationService.Code.LABEL_TOO_LONG> |
            StringTooLongErrorDto<SmartChipValidationService.Code.PREFIX_TOO_LONG>
        >;
    }

    export enum Code {
        GENERIC_SERVICE_ERROR,
        LABEL_ALREADY_EXISTS,
        PREFIX_ALREADY_EXISTS,
    }
}
