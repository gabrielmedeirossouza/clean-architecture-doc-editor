import { IFieldDTO, IMessageDTO } from ".";

export interface INumberTooLargeErrorDTO extends IFieldDTO, IMessageDTO {
  readonly maxValue: number;
  readonly value: number;
}