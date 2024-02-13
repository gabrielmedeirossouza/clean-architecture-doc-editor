import { IPersistedEntity, ISmartChip } from "@/entities/interfaces";
import { Result } from "@/shared/result";
import { IMessageDTO, INumberOutsideRangeErrorDTO, IStringTooLongErrorDTO, IStringTooShortErrorDTO } from "../dtos";

export interface ICreateSmartChipUseCaseInputPort {
    Create(requestModel: ICreateSmartChipUseCaseRequestModel): Promise<void>;
}

export interface ICreateSmartChipUseCaseOutputPort {
    CreateResponse(responseModel: ICreateSmartChipUseCaseResponseModel): void;
}

export interface ICreateSmartChipUseCaseRequestModel {
    label: string;
    prefix: string;
    position: number;
}

export interface ICreateSmartChipUseCaseResponseModel {
    response: Result<
        IPersistedEntity<ISmartChip>,
        IMessageDTO<"GENERIC_SERVICE_ERROR"> |
        IMessageDTO<"LABEL_ALREADY_EXISTS"> |
        IMessageDTO<"PREFIX_ALREADY_EXISTS"> |
        IMessageDTO<"POSITION_ALREADY_EXISTS"> |
        IStringTooShortErrorDTO<"LABEL_TOO_SHORT"> |
        IStringTooShortErrorDTO<"PREFIX_TOO_SHORT"> |
        IStringTooLongErrorDTO<"LABEL_TOO_LONG"> |
        IStringTooLongErrorDTO<"PREFIX_TOO_LONG"> |
        INumberOutsideRangeErrorDTO<"POSITION_OUTSIDE_RANGE">
    >;
}
