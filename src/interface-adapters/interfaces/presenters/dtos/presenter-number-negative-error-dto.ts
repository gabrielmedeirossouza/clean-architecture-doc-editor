import { IPresenterFieldDTO, IPresenterMessageDTO } from ".";

export interface IPresenterNumberNegativeErrorDTO<T extends string> extends IPresenterFieldDTO<T>, IPresenterMessageDTO<T> {
  readonly value: number;
}
