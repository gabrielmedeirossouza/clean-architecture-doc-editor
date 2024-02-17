import { Result } from "@/cross-cutting-concerns";
import { PersistedEntity, SmartChip } from "@/entities/interfaces";
import { CannotFindDto } from "@/use-cases/interfaces/dtos";

export namespace GetSmartChipUseCase {
    export interface InputPort {
        GetById(requestModel: GetByIdRequestModel): Promise<void>;
    }

    export interface OutputPort {
        GetByIdResponse(responseModel: GetByIdResponseModel): void;
    }

    export interface GetByIdRequestModel {
        id: string;
    }

    export interface GetByIdResponseModel {
        response: Result<
            PersistedEntity<SmartChip>,
            CannotFindDto<Code.SMART_CHIP_NOT_FOUND> |
            CannotFindDto<Code.GENERIC_SERVICE_ERROR>
        >;
    }

    export enum Code {
        SMART_CHIP_NOT_FOUND,
        GENERIC_SERVICE_ERROR
    }
}

