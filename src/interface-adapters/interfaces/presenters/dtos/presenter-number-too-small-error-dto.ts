import { PresenterFieldDto, PresenterMessageDto } from ".";

export interface PresenterNumberTooSmallErrorDto<T> extends PresenterFieldDto<T>, PresenterMessageDto<T> {
  readonly value: number;
  readonly minValue: number;
}
