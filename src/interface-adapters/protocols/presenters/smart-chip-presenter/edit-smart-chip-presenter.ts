import { Observable, Result } from "@/shared";
import { PresenterMessageDto, PresenterStringTooLongErrorDto, PresenterStringTooShortErrorDto } from "@/interface-adapters/interfaces/presenters/dtos";
import { SmartChipViewModel } from "./view-model";

export namespace EditSmartChipPresenter {
    export interface OutputPort {
        editResponse?: Observable<Result<
            SmartChipViewModel,
            PresenterMessageDto<Code.GENERIC_SERVICE_ERROR> |
            PresenterMessageDto<Code.SMART_CHIP_NOT_FOUND> |
            PresenterMessageDto<Code.LABEL_ALREADY_EXISTS> |
            PresenterMessageDto<Code.PREFIX_ALREADY_EXISTS> |
            PresenterStringTooShortErrorDto<Code.LABEL_TOO_SHORT> |
            PresenterStringTooShortErrorDto<Code.PREFIX_TOO_SHORT> |
            PresenterStringTooLongErrorDto<Code.LABEL_TOO_LONG> |
            PresenterStringTooLongErrorDto<Code.PREFIX_TOO_LONG>
        >>;
    }

    export enum Code {
        GENERIC_SERVICE_ERROR,
        SMART_CHIP_NOT_FOUND,
        LABEL_ALREADY_EXISTS,
        PREFIX_ALREADY_EXISTS,
        LABEL_TOO_SHORT,
        PREFIX_TOO_SHORT,
        LABEL_TOO_LONG,
        PREFIX_TOO_LONG,
    }
}
