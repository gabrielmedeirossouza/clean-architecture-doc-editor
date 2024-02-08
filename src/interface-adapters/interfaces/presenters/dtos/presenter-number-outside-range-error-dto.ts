import { IPresenterFieldDTO, IPresenterMessageDTO } from ".";

export interface IPresenterNumberOutsideRangeErrorDTO extends IPresenterFieldDTO, IPresenterMessageDTO {
  readonly value: number;
  readonly minValue: number;
  readonly maxValue: number;
}
