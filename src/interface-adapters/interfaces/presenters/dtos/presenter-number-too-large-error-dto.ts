import { PresenterFieldDto, PresenterMessageDto } from ".";

export interface PresenterNumberTooLargeErrorDto<T> extends PresenterFieldDto<T>, PresenterMessageDto<T> {
  readonly value: number;
  readonly maxValue: number;
}
