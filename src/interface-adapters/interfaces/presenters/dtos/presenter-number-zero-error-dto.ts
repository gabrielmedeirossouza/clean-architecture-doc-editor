import { IPresenterFieldDTO, IPresenterMessageDTO } from ".";

export interface IPresenterNumberZeroErrorDTO<T extends string> extends IPresenterFieldDTO<T>, IPresenterMessageDTO<T> {}
