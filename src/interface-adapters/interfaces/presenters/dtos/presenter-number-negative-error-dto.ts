import { PresenterFieldDto, PresenterMessageDto } from ".";

export interface PresenterNumberNegativeErrorDto<T> extends PresenterFieldDto<T>, PresenterMessageDto<T> {
  readonly value: number;
}
