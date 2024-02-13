import { Observable, Result } from "@/shared";
import { ISmartChipViewModel } from "./view-model";
import { IPresenterMessageDTO } from "../dtos";

export interface IGetSmartChipPresenterOutputPort {
    getSmartChipByIdResponse?: Observable<Result<
        ISmartChipViewModel,
        IPresenterMessageDTO<"GENERIC_SERVICE_ERROR"> |
        IPresenterMessageDTO<"SMART_CHIP_NOT_FOUND">
    >>;
}
