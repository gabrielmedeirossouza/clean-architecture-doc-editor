import { IFieldDTO, IMessageDTO } from ".";

export interface INumberTooSmallErrorDTO extends IFieldDTO, IMessageDTO {
  readonly minValue: number;
  readonly value: number;
}