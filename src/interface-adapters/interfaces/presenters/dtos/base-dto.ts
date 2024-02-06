import { IPresentFieldDTO, IPresentMessageDTO, IPresentNumberNegativeErrorDTO, IPresentNumberOutsideRangeErrorDTO, IPresentNumberTooLargeErrorDTO, IPresentNumberTooSmallErrorDTO, IPresentNumberZeroErrorDTO, IPresentStringTooLongErrorDTO, IPresentStringTooShortErrorDTO } from ".";

export interface IBaseDTO {
  IsPresentFieldDTO(): this is IPresentFieldDTO;
  IsPresentMessageDTO(): this is IPresentMessageDTO;
  IsPresentStringTooShortErrorDTO(): this is IPresentStringTooShortErrorDTO;
  IsPresentStringTooLongErrorDTO(): this is IPresentStringTooLongErrorDTO;
  IsPresentNumberZeroErrorDTO(): this is IPresentNumberZeroErrorDTO;
  IsPresentNumberNegativeErrorDTO(): this is IPresentNumberNegativeErrorDTO;
  IsPresentNumberTooLargeErrorDTO(): this is IPresentNumberTooLargeErrorDTO;
  IsPresentNumberTooSmallErrorDTO(): this is IPresentNumberTooSmallErrorDTO;
  IsPresentNumberOutsideRangeErrorDTO(): this is IPresentNumberOutsideRangeErrorDTO;
}
