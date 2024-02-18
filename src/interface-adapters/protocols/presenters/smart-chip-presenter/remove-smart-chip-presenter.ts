import { Observable, Result } from "@/shared";
import { PresenterMessageDto } from "@/interface-adapters/interfaces/presenters/dtos";

export namespace RemoveSmartChipPresenter {
    export interface OutputPort {
        removeResponse?: Observable<Result<
            string,
            PresenterMessageDto<Code.GENERIC_SERVICE_ERROR> |
            PresenterMessageDto<Code.SMART_CHIP_NOT_FOUND>
        >>;
    }

    export enum Code {
        GENERIC_SERVICE_ERROR,
        SMART_CHIP_NOT_FOUND
    }
}

