import { IPresenterFieldDTO, IPresenterMessageDTO } from ".";

export interface IPresenterNumberTooLargeErrorDTO<T extends string> extends IPresenterFieldDTO<T>, IPresenterMessageDTO<T> {
  readonly value: number;
  readonly maxValue: number;
}
