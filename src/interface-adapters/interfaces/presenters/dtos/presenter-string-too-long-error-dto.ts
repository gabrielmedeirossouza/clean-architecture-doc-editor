import { PresenterFieldDto, PresenterMessageDto } from ".";

export interface PresenterStringTooLongErrorDto<T> extends PresenterFieldDto<T>, PresenterMessageDto<T> {
  readonly value: string;
  readonly maxLength: number;
}
