import { IPresenterFieldDTO, IPresenterMessageDTO } from ".";

export interface IPresenterNumberTooSmallErrorDTO extends IPresenterFieldDTO, IPresenterMessageDTO {
  readonly value: number;
  readonly minValue: number;
}
