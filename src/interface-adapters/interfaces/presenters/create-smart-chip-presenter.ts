import { Result } from "../../../shared/result";
import { IPresentMessageDTO, IPresentNumberOutsideRangeErrorDTO, IPresentStringTooLongErrorDTO, IPresentStringTooShortErrorDTO } from "./dtos";
import { IObservable } from "../observable";

interface ICreateSmartChipPresenterViewModel {
  readonly id: string;
  readonly label: string;
  readonly prefix: string;
  readonly position: number;
}

export interface ICreateSmartChipPresenterOutputPort {
  response?: IObservable<Result<ICreateSmartChipPresenterViewModel, IPresentMessageDTO>>;
  labelResponse?: IObservable<Result<string, IPresentStringTooShortErrorDTO | IPresentStringTooLongErrorDTO>>;
  prefixResponse?: IObservable<Result<string, IPresentStringTooShortErrorDTO | IPresentStringTooLongErrorDTO>>;
  positionResponse?: IObservable<Result<number, IPresentNumberOutsideRangeErrorDTO>>;
}
