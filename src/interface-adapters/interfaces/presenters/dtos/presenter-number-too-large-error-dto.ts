import { IPresenterFieldDTO, IPresenterMessageDTO } from ".";

export interface IPresenterNumberTooLargeErrorDTO extends IPresenterFieldDTO, IPresenterMessageDTO {
  readonly value: number;
  readonly maxValue: number;
}
