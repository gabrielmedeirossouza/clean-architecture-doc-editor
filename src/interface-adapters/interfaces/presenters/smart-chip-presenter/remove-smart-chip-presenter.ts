import { Observable, Result } from "@/shared";
import { IPresenterMessageDTO } from "../dtos";

export interface IRemoveSmartChipPresenterOutputPort {
    removeResponse?: Observable<Result<string, IPresenterMessageDTO>>;
}
