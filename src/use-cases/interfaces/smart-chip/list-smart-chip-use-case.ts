import { Result } from "@/shared/result";
import { IMessageDTO } from "../dtos";
import { IPaginatedEntities, IPersistedEntity, ISmartChip } from "@/entities/interfaces";

export interface IListSmartChipUseCaseInputPort {
    List(requestModel: IListSmartChipUseCaseRequestModel): Promise<void>;
}

export interface IListSmartChipUseCaseOutputPort {
    Response(responseModel: IListSmartChipUseCaseResponseModel): void;
}

export interface IListSmartChipUseCaseRequestModel {
    page: number;
    limit: number;
}

export interface IListSmartChipUseCaseResponseModel {
    response: Result<IPaginatedEntities<IPersistedEntity<ISmartChip>>, IMessageDTO>;
}
