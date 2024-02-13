import { IBaseDTO } from ".";

export interface IPresenterFieldDTO<T extends string> extends IBaseDTO<T> {
  readonly fieldName: string;
}
