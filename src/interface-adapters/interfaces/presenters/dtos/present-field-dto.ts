import { IBaseDTO } from ".";

export interface IPresentFieldDTO extends IBaseDTO {
  readonly field: string;
}