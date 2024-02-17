import { PresenterFieldDto, PresenterMessageDto } from ".";

export interface PresenterStringTooShortErrorDto<T> extends PresenterFieldDto<T>, PresenterMessageDto<T> {
  readonly value: string;
  readonly minLength: number;
}
