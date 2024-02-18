import { Result } from "@/shared";
import { CannotFindDto } from "@/use-cases/interfaces/dtos";

export namespace RemoveSmartChipUseCase {
    export interface InputPort {
        Remove(requestModel: RemoveRequestModel): Promise<void>;
    }

    export interface OutputPort {
        RemoveResponse(responseModel: RemoveResponseModel): void;
    }

    export interface RemoveRequestModel {
        id: string;
    }

    export interface RemoveResponseModel {
        response: Result<
            string,
            CannotFindDto<Code.SMART_CHIP_NOT_FOUND> |
            CannotFindDto<Code.GENERIC_SERVICE_ERROR>
        >;
    }

    export enum Code {
        SMART_CHIP_NOT_FOUND,
        GENERIC_SERVICE_ERROR
    }
}
