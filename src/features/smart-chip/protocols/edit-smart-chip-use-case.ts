import { CannotFindDto, MessageDto, Result, StringTooLongErrorDto, StringTooShortErrorDto } from "@/shared";
import { PersistedDto } from "@/features/@dtos";
import { SmartChipEntity } from "@/features/smart-chip/entities";

export type IEditField = {
    label?: string;
    prefix?: string;
};

export type IEditResponseResult = Result<
    PersistedDto<SmartChipEntity>,
    CannotFindDto<"SMART_CHIP_NOT_FOUND"> |
    MessageDto<"LABEL_ALREADY_EXISTS"> |
    MessageDto<"PREFIX_ALREADY_EXISTS"> |
    StringTooShortErrorDto<"LABEL_TOO_SHORT"> |
    StringTooShortErrorDto<"PREFIX_TOO_SHORT"> |
    StringTooLongErrorDto<"LABEL_TOO_LONG"> |
    StringTooLongErrorDto<"PREFIX_TOO_LONG">
>;

export interface IEditSmartChipUseCaseInputPort {
    Edit(id: string, field: IEditField): void;
}

export interface IEditSmartChipUseCaseOutputPort {
    EditResponse(result: IEditResponseResult): void;
}

