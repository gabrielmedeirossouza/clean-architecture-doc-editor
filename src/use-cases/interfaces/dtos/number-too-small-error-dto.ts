import { FieldDto, MessageDto } from ".";

export interface NumberTooSmallErrorDto<T> extends FieldDto<T>, MessageDto<T> {
  readonly minValue: number;
  readonly value: number;
}
