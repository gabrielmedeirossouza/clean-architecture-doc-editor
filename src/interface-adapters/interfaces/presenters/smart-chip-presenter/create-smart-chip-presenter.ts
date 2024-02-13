import { Observable, Result } from "@/shared";
import { IPresenterMessageDTO, IPresenterNumberOutsideRangeErrorDTO, IPresenterStringTooLongErrorDTO, IPresenterStringTooShortErrorDTO } from "../dtos";
import { ISmartChipViewModel } from "./view-model";

export interface ICreateSmartChipPresenterOutputPort {
    createResponse?: Observable<Result<
        ISmartChipViewModel,
        IPresenterMessageDTO<"GENERIC_SERVICE_ERROR"> |
        IPresenterMessageDTO<"SMART_CHIP_WITH_SAME_LABEL_ALREADY_EXISTS"> |
        IPresenterMessageDTO<"SMART_CHIP_WITH_SAME_PREFIX_ALREADY_EXISTS"> |
        IPresenterMessageDTO<"SMART_CHIP_WITH_SAME_POSITION_ALREADY_EXISTS"> |
        IPresenterStringTooShortErrorDTO<"LABEL_TOO_SHORT"> |
        IPresenterStringTooShortErrorDTO<"PREFIX_TOO_SHORT"> |
        IPresenterStringTooLongErrorDTO<"LABEL_TOO_LONG"> |
        IPresenterStringTooLongErrorDTO<"PREFIX_TOO_LONG"> |
        IPresenterNumberOutsideRangeErrorDTO<"POSITION_OUTSIDE_RANGE">
    >>;
}
