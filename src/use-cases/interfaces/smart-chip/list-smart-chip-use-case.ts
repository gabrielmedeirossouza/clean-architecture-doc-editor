import { IPersistedEntity, ISmartChip } from "@/entities/interfaces";

export interface IListSmartChipUseCaseInputPort {
    List(): Promise<void>;
}

export interface IListSmartChipUseCaseOutputPort {
    ListResponse(responseModel: IListSmartChipUseCaseResponseModel): void;
}

// export interface IListSmartChipUseCaseRequestModel {
//     page: number;
//     limit: number;
// }

export interface IListSmartChipUseCaseResponseModel {
    response: IPersistedEntity<ISmartChip>[];
}
