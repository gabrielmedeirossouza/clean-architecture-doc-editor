import { IPresentFieldDTO, IPresentMessageDTO } from ".";

export interface IPresentNumberTooSmallErrorDTO extends IPresentFieldDTO, IPresentMessageDTO {
  readonly value: number;
  readonly minValue: number;
}
