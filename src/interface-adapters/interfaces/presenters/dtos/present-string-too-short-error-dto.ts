import { IPresentFieldDTO, IPresentMessageDTO } from ".";

export interface IPresentStringTooShortErrorDTO extends IPresentFieldDTO, IPresentMessageDTO {
  readonly value: string;
  readonly minLength: number;
  readonly currentLength: number;
}
