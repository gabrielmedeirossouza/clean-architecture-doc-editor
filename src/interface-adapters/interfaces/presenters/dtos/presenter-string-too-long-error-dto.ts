import { IPresenterFieldDTO, IPresenterMessageDTO } from ".";

export interface IPresenterStringTooLongErrorDTO extends IPresenterFieldDTO, IPresenterMessageDTO {
  readonly value: string;
  readonly maxLength: number;
  readonly currentLength: number;
}
