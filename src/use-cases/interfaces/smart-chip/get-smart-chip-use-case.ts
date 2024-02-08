import { IPersistedEntity, ISmartChip } from "@/entities/interfaces";
import { Result } from "@/shared/result";
import { IMessageDTO } from "../dtos";

export interface IGetSmartChipUseCaseInputPort {
    GetSmartChipById(requestModel: IGetSmartChipUseCaseRequestModel): Promise<void>;
}

export interface IGetSmartChipUseCaseOutputPort {
    Response(responseModel: IGetSmartChipUseCaseResponseModel): void;
}

export interface IGetSmartChipUseCaseRequestModel {
    id: string;
}

export interface IGetSmartChipUseCaseResponseModel {
    response: Result<IPersistedEntity<ISmartChip>, IMessageDTO>;
}
