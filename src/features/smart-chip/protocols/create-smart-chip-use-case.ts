import { MessageDto, Result, StringTooLongErrorDto, StringTooShortErrorDto } from "@/shared";
import { PersistedDto } from "@/features/@dtos";
import { SmartChipEntity } from "@/features/smart-chip/entities";

export type ICreateResponseResult = Result<
    PersistedDto<SmartChipEntity>,
    MessageDto<"GENERIC_SERVICE_ERROR"> |
    MessageDto<"LABEL_ALREADY_EXISTS"> |
    MessageDto<"PREFIX_ALREADY_EXISTS"> |
    StringTooShortErrorDto<"LABEL_TOO_SHORT"> |
    StringTooShortErrorDto<"PREFIX_TOO_SHORT"> |
    StringTooLongErrorDto<"LABEL_TOO_LONG"> |
    StringTooLongErrorDto<"PREFIX_TOO_LONG">
>

export interface ICreateSmartChipUseCaseInputPort {
    Create(label: string, prefix: string): void;
}

export interface ICreateSmartChipUseCaseOutputPort {
    CreateResponse(result: ICreateResponseResult): void;
}
