import { IFieldDTO, IMessageDTO } from ".";

export interface INumberTooSmallErrorDTO<T extends string> extends IFieldDTO<T>, IMessageDTO<T> {
  readonly minValue: number;
  readonly value: number;
}
