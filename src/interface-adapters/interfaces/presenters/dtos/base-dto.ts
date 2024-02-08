import { IPresenterFieldDTO, IPresenterMessageDTO, IPresenterNumberNegativeErrorDTO, IPresenterNumberOutsideRangeErrorDTO, IPresenterNumberTooLargeErrorDTO, IPresenterNumberTooSmallErrorDTO, IPresenterNumberZeroErrorDTO, IPresenterStringTooLongErrorDTO, IPresenterStringTooShortErrorDTO } from ".";

export interface IBaseDTO {
  IsPresentFieldDTO(): this is IPresenterFieldDTO;
  IsPresentMessageDTO(): this is IPresenterMessageDTO;
  IsPresentStringTooShortErrorDTO(): this is IPresenterStringTooShortErrorDTO;
  IsPresentStringTooLongErrorDTO(): this is IPresenterStringTooLongErrorDTO;
  IsPresentNumberZeroErrorDTO(): this is IPresenterNumberZeroErrorDTO;
  IsPresentNumberNegativeErrorDTO(): this is IPresenterNumberNegativeErrorDTO;
  IsPresentNumberTooLargeErrorDTO(): this is IPresenterNumberTooLargeErrorDTO;
  IsPresentNumberTooSmallErrorDTO(): this is IPresenterNumberTooSmallErrorDTO;
  IsPresentNumberOutsideRangeErrorDTO(): this is IPresenterNumberOutsideRangeErrorDTO;
}
