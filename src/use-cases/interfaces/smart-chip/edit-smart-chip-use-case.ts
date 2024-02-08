import { ISmartChip } from "@/entities/interfaces";
import { Result } from "@/shared/result";
import { IMessageDTO, INumberOutsideRangeErrorDTO, IStringTooLongErrorDTO, IStringTooShortErrorDTO } from "../dtos";

export interface IEditSmartChipUseCaseInputPort {
    Edit(requestModel: IEditSmartChipUseCaseRequestModel): void;
}

export interface IEditSmartChipUseCaseOutputPort {
    Response(responseModel: IEditSmartChipUseCaseResponseModel): void;
    LabelResponse(responseModel: IEditSmartChipUseCaseLabelResponseModel): void;
    PrefixResponse(responseModel: IEditSmartChipUseCasePrefixResponseModel): void;
    PositionResponse(responseModel: IEditSmartChipUseCasePositionResponseModel): void;
}

export interface IEditSmartChipUseCaseRequestModel {
    id: string;
    label?: string;
    prefix?: string;
    position?: number;
}

export interface IEditSmartChipUseCaseResponseModel {
    response: Result<ISmartChip, IMessageDTO>;
}

export interface IEditSmartChipUseCaseLabelResponseModel {
    response: Result<string, IStringTooShortErrorDTO | IStringTooLongErrorDTO>;
}

export interface IEditSmartChipUseCasePrefixResponseModel {
    response: Result<string, IStringTooShortErrorDTO | IStringTooLongErrorDTO>;
}

export interface IEditSmartChipUseCasePositionResponseModel {
    response: Result<number, INumberOutsideRangeErrorDTO>;
}
