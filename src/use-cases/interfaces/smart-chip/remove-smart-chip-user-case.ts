import { Result } from "@/shared/result";
import { ICannotFindDTO } from "../dtos";

export interface IRemoveSmartChipUseCaseInputPort {
    Remove(requestModel: IRemoveSmartChipUseCaseRequestModel): Promise<void>;
}

export interface IRemoveSmartChipUseCaseOutputPort {
    Response(responseModel: IRemoveSmartChipUseCaseResponseModel): void;
}

export interface IRemoveSmartChipUseCaseRequestModel {
    id: string;
}

export interface IRemoveSmartChipUseCaseResponseModel {
    response: Result<string, ICannotFindDTO>;
}

