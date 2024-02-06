import { IPresentFieldDTO, IPresentMessageDTO } from ".";

export interface IPresentNumberOutsideRangeErrorDTO extends IPresentFieldDTO, IPresentMessageDTO {
  readonly value: number;
  readonly minValue: number;
  readonly maxValue: number;
}