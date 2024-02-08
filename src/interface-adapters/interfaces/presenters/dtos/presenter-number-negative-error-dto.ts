import { IPresenterFieldDTO, IPresenterMessageDTO } from ".";

export interface IPresenterNumberNegativeErrorDTO extends IPresenterFieldDTO, IPresenterMessageDTO {
  readonly value: number;
}
