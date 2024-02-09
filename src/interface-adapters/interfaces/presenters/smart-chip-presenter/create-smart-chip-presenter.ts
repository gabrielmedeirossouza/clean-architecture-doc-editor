import { Observable, Result } from "@/shared";
import { IPresenterMessageDTO, IPresenterNumberOutsideRangeErrorDTO, IPresenterStringTooLongErrorDTO, IPresenterStringTooShortErrorDTO } from "../dtos";
import { ISmartChipViewModel } from "./view-model";

export interface ICreateSmartChipPresenterOutputPort {
  createResponse?: Observable<Result<ISmartChipViewModel, IPresenterMessageDTO>>;
  labelResponse?: Observable<Result<string, IPresenterStringTooShortErrorDTO | IPresenterStringTooLongErrorDTO>>;
  prefixResponse?: Observable<Result<string, IPresenterStringTooShortErrorDTO | IPresenterStringTooLongErrorDTO>>;
  positionResponse?: Observable<Result<number, IPresenterNumberOutsideRangeErrorDTO>>;
}
