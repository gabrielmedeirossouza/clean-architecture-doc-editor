import { Observable, Result } from "@/cross-cutting-concerns";
import { PresenterMessageDto, PresenterStringTooLongErrorDto, PresenterStringTooShortErrorDto } from "@/interface-adapters/interfaces/presenters/dtos";
import { SmartChipViewModel } from "./view-model";

export namespace CreateSmartChipPresenter {
    export interface OutputPort {
        createResponse?: Observable<Result<
            SmartChipViewModel,
            PresenterMessageDto<Code.GENERIC_SERVICE_ERROR> |
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
        LABEL_ALREADY_EXISTS,
        PREFIX_ALREADY_EXISTS,
        LABEL_TOO_SHORT,
        PREFIX_TOO_SHORT,
        LABEL_TOO_LONG,
        PREFIX_TOO_LONG,
    }
}
