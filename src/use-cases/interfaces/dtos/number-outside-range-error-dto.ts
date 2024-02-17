import { FieldDto, MessageDto } from ".";

export interface NumberOutsideRangeErrorDto<T> extends FieldDto<T>, MessageDto<T> {
  readonly minValue: number;
  readonly maxValue: number;
  readonly value: number;
}
