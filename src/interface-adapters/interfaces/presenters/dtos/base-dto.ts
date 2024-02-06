import { IPresentFieldDTO, IPresentMessageDTO, IPresentNumberNegativeErrorDTO, IPresentNumberOutsideRangeErrorDTO, IPresentNumberTooLargeErrorDTO, IPresentNumberTooSmallErrorDTO, IPresentNumberZeroErrorDTO, IPresentStringTooLongErrorDTO, IPresentStringTooShortErrorDTO } from ".";


export interface IBaseDTO {
  isPresentFieldDTO(): this is IPresentFieldDTO;
  isPresentMessageDTO(): this is IPresentMessageDTO;
  isPresentStringTooShortErrorDTO(): this is IPresentStringTooShortErrorDTO;
  isPresentStringTooLongErrorDTO(): this is IPresentStringTooLongErrorDTO;
  isPresentNumberZeroErrorDTO(): this is IPresentNumberZeroErrorDTO;
  isPresentNumberNegativeErrorDTO(): this is IPresentNumberNegativeErrorDTO;
  isPresentNumberTooLargeErrorDTO(): this is IPresentNumberTooLargeErrorDTO;
  isPresentNumberTooSmallErrorDTO(): this is IPresentNumberTooSmallErrorDTO;
  isPresentNumberOutsideRangeErrorDTO(): this is IPresentNumberOutsideRangeErrorDTO;
}