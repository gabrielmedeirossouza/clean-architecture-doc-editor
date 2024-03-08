import { CannotFindDto, Result } from "@/shared";
import { IPaginatedEntity, IPersistedEntity } from "@/features/entities/protocols";
import { ISmartChipEntity } from "./smart-chip-entity";

export interface ISmartChipRepository {
    Create(smartChip: ISmartChipEntity): string;
    Edit(smartChip: IPersistedEntity<ISmartChipEntity>): Result<string, CannotFindDto<"SMART_CHIP_NOT_FOUND">>;
    Remove(id: string): Result<string, CannotFindDto<"SMART_CHIP_NOT_FOUND">>;
    Get(id: string): Result<IPersistedEntity<ISmartChipEntity>, CannotFindDto<"SMART_CHIP_NOT_FOUND">>;
    GetByLabel(label: string): Result<IPersistedEntity<ISmartChipEntity>, CannotFindDto<"SMART_CHIP_NOT_FOUND">>;
    GetByPrefix(prefix: string): Result<IPersistedEntity<ISmartChipEntity>, CannotFindDto<"SMART_CHIP_NOT_FOUND">>;
    List(page: number, limit: number): IPaginatedEntity<IPersistedEntity<ISmartChipEntity>>;
}
