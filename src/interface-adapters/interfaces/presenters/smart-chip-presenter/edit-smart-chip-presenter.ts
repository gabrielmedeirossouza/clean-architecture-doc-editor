import { Observable, Result } from "@/shared";
import { ISmartChipViewModel } from "./view-model";
import { IPresenterMessageDTO, IPresenterNumberOutsideRangeErrorDTO, IPresenterStringTooLongErrorDTO, IPresenterStringTooShortErrorDTO } from "../dtos";

export interface IEditSmartChipPresenterOutputPort {
    editResponse?: Observable<Result<ISmartChipViewModel, IPresenterMessageDTO>>;
    labelResponse?: Observable<Result<string, IPresenterStringTooShortErrorDTO | IPresenterStringTooLongErrorDTO>>;
    prefixResponse?: Observable<Result<string, IPresenterStringTooShortErrorDTO | IPresenterStringTooLongErrorDTO>>;
    positionResponse?: Observable<Result<number, IPresenterNumberOutsideRangeErrorDTO>>;
}
