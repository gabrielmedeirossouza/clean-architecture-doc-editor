import { Observable, Result } from "@/shared";
import { PresenterMessageDto } from "@/interface-adapters/interfaces/presenters/dtos";
import { SmartChipViewModel } from "./view-model";

export namespace GetSmartChipPresenter {
    export interface OutputPort {
        getSmartChipByIdResponse?: Observable<Result<
            SmartChipViewModel,
            PresenterMessageDto<Code.GENERIC_SERVICE_ERROR> |
            PresenterMessageDto<Code.SMART_CHIP_NOT_FOUND>
        >>;
    }

    export enum Code {
        GENERIC_SERVICE_ERROR,
        SMART_CHIP_NOT_FOUND
    }
}
