import { IPresentFieldDTO, IPresentMessageDTO } from ".";

export interface IPresentNumberTooLargeErrorDTO extends IPresentFieldDTO, IPresentMessageDTO {
  readonly value: number;
  readonly maxValue: number;
}
