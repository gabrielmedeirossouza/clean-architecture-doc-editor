import { PresenterFieldDto, PresenterMessageDto } from ".";

export interface PresenterNumberOutsideRangeErrorDto<T> extends PresenterFieldDto<T>, PresenterMessageDto<T> {
  readonly value: number;
  readonly minValue: number;
  readonly maxValue: number;
}
