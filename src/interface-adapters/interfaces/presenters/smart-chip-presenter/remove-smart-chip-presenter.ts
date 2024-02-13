import { Observable, Result } from "@/shared";
import { IPresenterMessageDTO } from "../dtos";

export interface IRemoveSmartChipPresenterOutputPort {
    removeResponse?: Observable<Result<
        string,
        IPresenterMessageDTO<"GENERIC_SERVICE_ERROR"> |
        IPresenterMessageDTO<"SMART_CHIP_NOT_FOUND">
    >>;
}
