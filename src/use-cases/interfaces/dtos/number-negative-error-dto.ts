import { IFieldDTO, IMessageDTO } from ".";

export interface INumberNegativeErrorDTO extends IFieldDTO, IMessageDTO {
  readonly value: number;
}
