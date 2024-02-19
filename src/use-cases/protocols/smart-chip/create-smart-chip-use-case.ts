import { MessageDto, Result, StringTooLongErrorDto, StringTooShortErrorDto } from "@/shared";
import { IPersistedEntity } from "@/entities/protocols/persisted-entity";
import { ISmartChip } from "@/entities/protocols/smart-chip";

export type ICreateResponseResult = Result<
    IPersistedEntity<ISmartChip>,
    MessageDto<"GENERIC_SERVICE_ERROR"> |
    MessageDto<"LABEL_ALREADY_EXISTS"> |
    MessageDto<"PREFIX_ALREADY_EXISTS"> |
    StringTooShortErrorDto<"LABEL_TOO_SHORT"> |
    StringTooShortErrorDto<"PREFIX_TOO_SHORT"> |
    StringTooLongErrorDto<"LABEL_TOO_LONG"> |
    StringTooLongErrorDto<"PREFIX_TOO_LONG">
>

export interface ICreateSmartChipUseCaseInputPort {
    Create(label: string, prefix: string): Promise<void>;
}

export interface ICreateSmartChipUseCaseOutputPort {
    CreateResponse(result: ICreateResponseResult): void;
}
