import { CannotFindDto, Result } from "@/shared";
import { IPersistedEntity } from "@/entities/protocols/persisted-entity";
import { ISmartChip } from "@/entities/protocols/smart-chip";

export type IGetByIdResponseResult = Result<
    IPersistedEntity<ISmartChip>,
    CannotFindDto<"SMART_CHIP_NOT_FOUND"> |
    CannotFindDto<"GENERIC_SERVICE_ERROR">
>;

export interface IGetSmartChipUseCaseInputPort {
    GetById(id: string): Promise<void>;
}

export interface IGetSmartChipUseCaseOutputPort {
    GetByIdResponse(result: IGetByIdResponseResult): void;
}

