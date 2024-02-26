import { MessageDto, Observable, Result } from "@/shared";
import { ISmartChipViewModel } from "@/interface-adapters/protocols/views/smart-chip-view/view-model";

export interface IGetSmartChipPresenterOutput {
    getSmartChipByIdOutput?: Observable<Result<
        ISmartChipViewModel,
        MessageDto<"GENERIC_SERVICE_ERROR"> |
        MessageDto<"SMART_CHIP_NOT_FOUND">
    >>;
}
