import { IPresentFieldDTO, IPresentMessageDTO } from ".";

export interface IPresentNumberNegativeErrorDTO extends IPresentFieldDTO, IPresentMessageDTO {
  readonly value: number;
}
