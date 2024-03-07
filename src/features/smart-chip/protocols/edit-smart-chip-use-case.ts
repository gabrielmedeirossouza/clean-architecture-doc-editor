import { CannotFindDto, MessageDto, Result, StringTooLongErrorDto, StringTooShortErrorDto } from "@/shared";
import { IPersistedEntity } from "@/entities/protocols/persisted-entity";
import { ISmartChipEntity } from "./smart-chip-entity";

export type IEditField = {
    label?: string;
    prefix?: string;
};

export type IEditResponseResult = Result<
    IPersistedEntity<ISmartChipEntity>,
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

