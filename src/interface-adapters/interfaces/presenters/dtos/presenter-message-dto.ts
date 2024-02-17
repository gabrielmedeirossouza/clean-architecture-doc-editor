import { BaseDto } from ".";

export interface PresenterMessageDto<T> extends BaseDto<T> {
  readonly message: string;
}
