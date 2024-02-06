import { Result } from "../../../shared/result";
import { IPresentMessageDTO, IPresentNumberOutsideRangeErrorDTO, IPresentStringTooLongErrorDTO, IPresentStringTooShortErrorDTO } from "./dtos";
import { IObservable } from "../observable";

interface ICreateSmartChipPresenterViewModel {
  readonly id: string;
  readonly name: string;
  readonly prefix: string;
  readonly value: number;
}

export interface ICreateSmartChipPresenterOutputPort {
  response?: IObservable<Result<ICreateSmartChipPresenterViewModel, IPresentMessageDTO>>;
  idResponse?: IObservable<Result<string, IPresentStringTooShortErrorDTO | IPresentStringTooLongErrorDTO>>;
  nameResponse?: IObservable<Result<string, IPresentStringTooShortErrorDTO | IPresentStringTooLongErrorDTO>>;
  prefixResponse?: IObservable<Result<string, IPresentStringTooShortErrorDTO | IPresentStringTooLongErrorDTO>>;
  valueResponse?: IObservable<Result<number, IPresentNumberOutsideRangeErrorDTO>>;
}
