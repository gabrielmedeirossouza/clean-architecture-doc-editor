import { IPersistedEntity, ISmartChip } from "@/entities/interfaces";
import { Result } from "@/shared/result";
import { ICannotFindDTO, IMessageDTO, INumberOutsideRangeErrorDTO, IStringTooLongErrorDTO, IStringTooShortErrorDTO } from "../dtos";

export interface IEditSmartChipUseCaseInputPort {
    Edit(requestModel: IEditSmartChipUseCaseRequestModel): Promise<void>;
}

export interface IEditSmartChipUseCaseOutputPort {
    EditResponse(responseModel: IEditSmartChipUseCaseResponseModel): void;
}

export interface IEditSmartChipUseCaseRequestModel {
    id: string;
    label?: string;
    prefix?: string;
    position?: number;
}

export interface IEditSmartChipUseCaseResponseModel {
    response: Result<
        IPersistedEntity<ISmartChip>,
        ICannotFindDTO<"SMART_CHIP_NOT_FOUND"> |
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
