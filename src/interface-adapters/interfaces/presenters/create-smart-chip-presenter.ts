import { Result } from "../../../shared/result";
import { IPresenterMessageDTO, IPresenterNumberOutsideRangeErrorDTO, IPresenterStringTooLongErrorDTO, IPresenterStringTooShortErrorDTO } from "./dtos";
import { IObservable } from "../observable";

interface ICreateSmartChipPresenterViewModel {
  readonly id: string;
  readonly label: string;
  readonly prefix: string;
  readonly position: number;
}

export interface ICreateSmartChipPresenterOutputPort {
  response?: IObservable<Result<ICreateSmartChipPresenterViewModel, IPresenterMessageDTO>>;
  labelResponse?: IObservable<Result<string, IPresenterStringTooShortErrorDTO | IPresenterStringTooLongErrorDTO>>;
  prefixResponse?: IObservable<Result<string, IPresenterStringTooShortErrorDTO | IPresenterStringTooLongErrorDTO>>;
  positionResponse?: IObservable<Result<number, IPresenterNumberOutsideRangeErrorDTO>>;
}
