import { IPresenterFieldDTO, IPresenterMessageDTO } from ".";

export interface IPresenterStringTooShortErrorDTO extends IPresenterFieldDTO, IPresenterMessageDTO {
  readonly value: string;
  readonly minLength: number;
  readonly currentLength: number;
}
