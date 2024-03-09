import { CannotFindDto, Result } from "@/shared";
import { PaginatedEntity, PersistedEntity } from "@/features/entities";
import { SmartChipEntity } from "@/features/smart-chip/entities";

export interface ISmartChipRepository {
    Create(smartChip: SmartChipEntity): string;
    Edit(smartChip: PersistedEntity<SmartChipEntity>): Result<string, CannotFindDto<"SMART_CHIP_NOT_FOUND">>;
    Remove(id: string): Result<string, CannotFindDto<"SMART_CHIP_NOT_FOUND">>;
    Get(id: string): Result<PersistedEntity<SmartChipEntity>, CannotFindDto<"SMART_CHIP_NOT_FOUND">>;
    GetByLabel(label: string): Result<PersistedEntity<SmartChipEntity>, CannotFindDto<"SMART_CHIP_NOT_FOUND">>;
    GetByPrefix(prefix: string): Result<PersistedEntity<SmartChipEntity>, CannotFindDto<"SMART_CHIP_NOT_FOUND">>;
    List(page: number, limit: number): PaginatedEntity<PersistedEntity<SmartChipEntity>>;
}
