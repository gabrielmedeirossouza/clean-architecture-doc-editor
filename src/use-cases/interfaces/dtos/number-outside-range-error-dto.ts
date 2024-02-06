import { IFieldDTO, IMessageDTO } from ".";

export interface INumberOutsideRangeErrorDTO extends IFieldDTO, IMessageDTO {
  readonly minValue: number;
  readonly maxValue: number;
  readonly value: number;
}
