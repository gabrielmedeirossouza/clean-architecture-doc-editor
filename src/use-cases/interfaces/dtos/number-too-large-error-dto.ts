import { FieldDto, MessageDto } from ".";

export interface NumberTooLargeErrorDto<T> extends FieldDto<T>, MessageDto<T> {
  readonly maxValue: number;
  readonly value: number;
}
