import { MessageDto, Result, StringTooLongErrorDto, StringTooShortErrorDto } from "@/shared";
import { ISmartChipViewModel } from "@/interface-adapters/protocols/views/smart-chip-view/view-model";

export interface ICreateSmartChipPresenterView {
    PresentCreate(result: ICreateSmartChipPresenterPresentCreate): void;
}

export type ICreateSmartChipPresenterPresentCreate = Result<
    ISmartChipViewModel,
    MessageDto<"GENERIC_SERVICE_ERROR"> |
    MessageDto<"LABEL_ALREADY_EXISTS"> |
    MessageDto<"PREFIX_ALREADY_EXISTS"> |
    StringTooShortErrorDto<"LABEL_TOO_SHORT"> |
    StringTooShortErrorDto<"PREFIX_TOO_SHORT"> |
    StringTooLongErrorDto<"LABEL_TOO_LONG"> |
    StringTooLongErrorDto<"PREFIX_TOO_LONG">
>
