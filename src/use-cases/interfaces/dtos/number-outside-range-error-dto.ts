import { IFieldDTO, IMessageDTO } from ".";

export interface INumberOutsideRangeErrorDTO<T extends string> extends IFieldDTO<T>, IMessageDTO<T> {
  readonly minValue: number;
  readonly maxValue: number;
  readonly value: number;
}
