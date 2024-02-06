import { IBaseDTO } from ".";

export interface IPresentMessageDTO extends IBaseDTO {
  readonly message: string;
}
