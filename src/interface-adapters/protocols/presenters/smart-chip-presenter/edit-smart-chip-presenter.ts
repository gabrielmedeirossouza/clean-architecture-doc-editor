import { MessageDto, Observable, Result, StringTooLongErrorDto, StringTooShortErrorDto } from "@/shared";
import { ISmartChipViewModel } from "@/interface-adapters/protocols/views/smart-chip-view/view-model";

export interface IEditSmartChipPresenterOutput {
    editOutput?: Observable<Result<
        ISmartChipViewModel,
        MessageDto<"GENERIC_SERVICE_ERROR"> |
        MessageDto<"SMART_CHIP_NOT_FOUND"> |
        MessageDto<"LABEL_ALREADY_EXISTS"> |
        MessageDto<"PREFIX_ALREADY_EXISTS"> |
        StringTooShortErrorDto<"LABEL_TOO_SHORT"> |
        StringTooShortErrorDto<"PREFIX_TOO_SHORT"> |
        StringTooLongErrorDto<"LABEL_TOO_LONG"> |
        StringTooLongErrorDto<"PREFIX_TOO_LONG">
    >>;
}

