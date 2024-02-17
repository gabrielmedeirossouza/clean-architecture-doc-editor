import { PersistedEntity, SmartChip } from "@/entities/interfaces";

export namespace ListSmartChipUseCase {
    export interface InputPort {
        List(): Promise<void>;
    }

    export interface OutputPort {
        ListResponse(responseModel: ListResponseModel): void;
    }

    // export interface ListRequestModel {
    //     page: number;
    //     limit: number;
    // }

    export interface ListResponseModel {
        response: PersistedEntity<SmartChip>[];
    }
}
