import { CannotFindDto, MessageDto, Result, StringTooLongErrorDto, StringTooShortErrorDto, SuccessDto } from "@/shared";
import { ISmartChip } from "@/entities/protocols/smart-chip";
import { IPersistedEntity } from "@/entities/protocols/persisted-entity";

export type IEditField = {
    label?: string;
    prefix?: string;
};

export type IEditResponseResult = Result<
    SuccessDto<IPersistedEntity<ISmartChip>>,
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

