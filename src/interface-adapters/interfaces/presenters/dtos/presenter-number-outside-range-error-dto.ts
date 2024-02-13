import { IPresenterFieldDTO, IPresenterMessageDTO } from ".";

export interface IPresenterNumberOutsideRangeErrorDTO<T extends string> extends IPresenterFieldDTO<T>, IPresenterMessageDTO<T> {
  readonly value: number;
  readonly minValue: number;
  readonly maxValue: number;
}
