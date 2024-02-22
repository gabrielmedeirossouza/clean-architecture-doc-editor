import { MessageDto, Observable, Result } from "@/shared";

export interface IRemoveSmartChipPresenterOutput {
    removeOutput?: Observable<Result<
        string,
        MessageDto<"GENERIC_SERVICE_ERROR"> |
        MessageDto<"SMART_CHIP_NOT_FOUND">
    >>;
}
