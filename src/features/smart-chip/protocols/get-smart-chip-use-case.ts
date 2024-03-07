import { CannotFindDto, Result } from "@/shared";
import { IPersistedEntity } from "@/entities/protocols/persisted-entity";
import { ISmartChipEntity } from "./smart-chip-entity";

export type IGetByIdResponseResult = Result<
    IPersistedEntity<ISmartChipEntity>,
    CannotFindDto<"SMART_CHIP_NOT_FOUND"> |
    CannotFindDto<"GENERIC_SERVICE_ERROR">
>;

export interface IGetSmartChipUseCaseInputPort {
    GetById(id: string): void;
}

export interface IGetSmartChipUseCaseOutputPort {
    GetByIdResponse(result: IGetByIdResponseResult): void;
}

