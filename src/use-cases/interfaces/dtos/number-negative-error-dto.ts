import { IFieldDTO, IMessageDTO } from ".";

export interface INumberNegativeErrorDTO<T extends string> extends IFieldDTO<T>, IMessageDTO<T> {
  readonly value: number;
}
