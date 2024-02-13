import { IBaseDTO } from ".";

export interface IPresenterMessageDTO<T extends string> extends IBaseDTO<T> {
  readonly message: string;
}
