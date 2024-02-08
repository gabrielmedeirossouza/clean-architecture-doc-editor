import { IPersistedEntity, ISmartChip } from "@/entities/interfaces";
import { Result } from "@/shared/result";
import { IMessageDTO, INumberOutsideRangeErrorDTO, IStringTooLongErrorDTO, IStringTooShortErrorDTO } from "../dtos";

export interface ICreateSmartChipUseCaseInputPort {
    Create(requestModel: ICreateSmartChipUseCaseRequestModel): Promise<void>;
}

export interface ICreateSmartChipUseCaseOutputPort {
    Response(responseModel: ICreateSmartChipUseCaseResponseModel): void;
    LabelResponse(responseModel: ICreateSmartChipUseCaseLabelResponseModel): void;
    PrefixResponse(responseModel: ICreateSmartChipUseCasePrefixResponseModel): void;
    PositionResponse(responseModel: ICreateSmartChipUseCasePositionResponseModel): void;
}

export interface ICreateSmartChipUseCaseRequestModel {
    label: string;
    prefix: string;
    position: number;
}

export interface ICreateSmartChipUseCaseResponseModel {
    response: Result<IPersistedEntity<ISmartChip>, IMessageDTO>;
}

export interface ICreateSmartChipUseCaseLabelResponseModel {
    response: Result<string, IStringTooShortErrorDTO | IStringTooLongErrorDTO>;
}

export interface ICreateSmartChipUseCasePrefixResponseModel {
    response: Result<string, IStringTooShortErrorDTO | IStringTooLongErrorDTO>;
}

export interface ICreateSmartChipUseCasePositionResponseModel {
    response: Result<number, INumberOutsideRangeErrorDTO>;
}
