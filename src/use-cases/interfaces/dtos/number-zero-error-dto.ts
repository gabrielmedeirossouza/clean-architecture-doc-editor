import { IFieldDTO, IMessageDTO } from ".";

export interface INumberZeroErrorDTO<T extends string> extends IFieldDTO<T>, IMessageDTO<T> {}
