import { CannotFindDto, Result, SuccessDto } from "@/shared";
import { IPersistedEntity } from "@/entities/protocols/persisted-entity";
import { ISmartChip } from "@/entities/protocols/smart-chip";

export type IGetByIdResponseResult = Result<
    SuccessDto<IPersistedEntity<ISmartChip>>,
    CannotFindDto<"SMART_CHIP_NOT_FOUND"> |
    CannotFindDto<"GENERIC_SERVICE_ERROR">
>;

export interface IGetSmartChipUseCaseInputPort {
    GetById(id: string): void;
}

export interface IGetSmartChipUseCaseOutputPort {
    GetByIdResponse(result: IGetByIdResponseResult): void;
}

