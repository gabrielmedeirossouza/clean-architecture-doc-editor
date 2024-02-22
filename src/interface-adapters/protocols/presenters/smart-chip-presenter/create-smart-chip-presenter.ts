import { MessageDto, Observable, Result, StringTooLongErrorDto, StringTooShortErrorDto } from "@/shared";
import { ISmartChipViewModel } from "./view-model";

export interface ICreateSmartChipPresenterOutput {
    createOutput?: Observable<Result<
        ISmartChipViewModel,
        MessageDto<"GENERIC_SERVICE_ERROR"> |
        MessageDto<"LABEL_ALREADY_EXISTS"> |
        MessageDto<"PREFIX_ALREADY_EXISTS"> |
        StringTooShortErrorDto<"LABEL_TOO_SHORT"> |
        StringTooShortErrorDto<"PREFIX_TOO_SHORT"> |
        StringTooLongErrorDto<"LABEL_TOO_LONG"> |
        StringTooLongErrorDto<"PREFIX_TOO_LONG">
    >>;
}
