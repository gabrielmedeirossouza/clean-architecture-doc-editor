import { CannotFindDto, Result } from "@/shared";
import { PersistedEntity } from "@/features/entities";
import { SmartChipEntity } from "@/features/smart-chip/entities";

export type IGetByIdResponseResult = Result<
    PersistedEntity<SmartChipEntity>,
    CannotFindDto<"SMART_CHIP_NOT_FOUND"> |
    CannotFindDto<"GENERIC_SERVICE_ERROR">
>;

export interface IGetSmartChipUseCaseInputPort {
    GetById(id: string): void;
}

export interface IGetSmartChipUseCaseOutputPort {
    GetByIdResponse(result: IGetByIdResponseResult): void;
}

