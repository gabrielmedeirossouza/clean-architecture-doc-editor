import { FieldDto, MessageDto } from ".";

export interface NumberNegativeErrorDto<T> extends FieldDto<T>, MessageDto<T> {
  readonly value: number;
}
