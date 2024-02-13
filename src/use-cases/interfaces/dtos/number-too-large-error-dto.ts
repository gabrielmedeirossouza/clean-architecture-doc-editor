import { IFieldDTO, IMessageDTO } from ".";

export interface INumberTooLargeErrorDTO<T extends string> extends IFieldDTO<T>, IMessageDTO<T> {
  readonly maxValue: number;
  readonly value: number;
}
