import { IPresenterFieldDTO, IPresenterMessageDTO } from ".";

export interface IPresenterNumberTooSmallErrorDTO<T extends string> extends IPresenterFieldDTO<T>, IPresenterMessageDTO<T> {
  readonly value: number;
  readonly minValue: number;
}
