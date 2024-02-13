import { IPresenterFieldDTO, IPresenterMessageDTO } from ".";

export interface IPresenterStringTooShortErrorDTO<T extends string> extends IPresenterFieldDTO<T>, IPresenterMessageDTO<T> {
  readonly value: string;
  readonly minLength: number;
}
