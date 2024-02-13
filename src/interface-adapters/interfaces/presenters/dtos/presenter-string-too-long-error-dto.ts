import { IPresenterFieldDTO, IPresenterMessageDTO } from ".";

export interface IPresenterStringTooLongErrorDTO<T extends string> extends IPresenterFieldDTO<T>, IPresenterMessageDTO<T> {
  readonly value: string;
  readonly maxLength: number;
}
