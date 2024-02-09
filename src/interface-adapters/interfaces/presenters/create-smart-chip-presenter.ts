import { Observable, Result } from "@/shared";
import { IPresenterMessageDTO, IPresenterNumberOutsideRangeErrorDTO, IPresenterStringTooLongErrorDTO, IPresenterStringTooShortErrorDTO } from "./dtos";

interface ICreateSmartChipPresenterViewModel {
  readonly id: string;
  readonly label: string;
  readonly prefix: string;
  readonly position: number;
}

export interface ICreateSmartChipPresenterOutputPort {
  response?: Observable<Result<ICreateSmartChipPresenterViewModel, IPresenterMessageDTO>>;
  labelResponse?: Observable<Result<string, IPresenterStringTooShortErrorDTO | IPresenterStringTooLongErrorDTO>>;
  prefixResponse?: Observable<Result<string, IPresenterStringTooShortErrorDTO | IPresenterStringTooLongErrorDTO>>;
  positionResponse?: Observable<Result<number, IPresenterNumberOutsideRangeErrorDTO>>;
}
