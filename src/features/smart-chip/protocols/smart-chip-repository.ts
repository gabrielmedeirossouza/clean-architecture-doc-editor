import { CannotFindDto, Result } from "@/shared";
import { PersistedDto } from "@/features/@dtos";
import { SmartChipEntity } from "@/features/smart-chip/entities";

export interface ISmartChipRepository {
    Create(smartChip: SmartChipEntity): string;
    Edit(smartChip: PersistedDto<SmartChipEntity>): Result<string, CannotFindDto<"SMART_CHIP_NOT_FOUND">>;
    Remove(id: string): Result<string, CannotFindDto<"SMART_CHIP_NOT_FOUND">>;
    Get(id: string): Result<PersistedDto<SmartChipEntity>, CannotFindDto<"SMART_CHIP_NOT_FOUND">>;
    GetByLabel(label: string): Result<PersistedDto<SmartChipEntity>, CannotFindDto<"SMART_CHIP_NOT_FOUND">>;
    GetByPrefix(prefix: string): Result<PersistedDto<SmartChipEntity>, CannotFindDto<"SMART_CHIP_NOT_FOUND">>;
}
