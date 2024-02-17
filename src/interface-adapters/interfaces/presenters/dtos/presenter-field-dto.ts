import { BaseDto } from ".";

export interface PresenterFieldDto<T> extends BaseDto<T> {
  readonly fieldName: string;
}
