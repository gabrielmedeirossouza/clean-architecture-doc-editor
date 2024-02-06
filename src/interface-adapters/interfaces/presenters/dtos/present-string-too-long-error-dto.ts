import { IPresentFieldDTO, IPresentMessageDTO } from ".";

export interface IPresentStringTooLongErrorDTO extends IPresentFieldDTO, IPresentMessageDTO {
  readonly value: string;
  readonly maxLength: number;
  readonly currentLength: number;
}